require("dotenv").config()
console.log(process.env.DB_LINK_POSTGRES);

const { Client } = require("pg");
const client = new Client({
    connectionString: process.env.DB_LINK_POSTGRES
});

client.connect();

module.exports = {
    getUsers: (limit) => {
        try {
            if (limit > 0 && limit < 100000) {
                const sql = `SELECT * FROM "public"."public.ae_User" LIMIT $1`;
                const result = client.query(sql, [limit]);
                return result;
            } else {
                new Error("The value is bellow 0, or is above 100000 or isn't a number");
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    insertUser: (user) => {
        try {
            if (user) {
                const sql = `INSERT INTO "public"."public.ae_User" ("Name", "Username", "Email", "Password", "Salt", "User_type", "Deleted") VALUES ($1, $2, $3, $4, $5, $6, $7)`;
                const result = client.query(sql, [user.name, user.username, user.email, user.password, user.salt, user.user_type, user.deleted]);
                return result;

            } else {
                new Error("The value is bellow 0, or is above 100000 or isn't a number");
            }
        } catch (error) {
            console.log(error);
            return error;
        }
        client.end();
    }
}