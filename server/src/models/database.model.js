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
                const sql = `SELECT * FROM "public"."ae_User" LIMIT $1`;
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
    getUsersForLogin: (limit) => {
        try {
            if (limit > 0 && limit < 100000) {
                const sql = `SELECT username, password, user_type FROM "public"."ae_User" WHERE deleted = false`;
                const result = client.query(sql);
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
                const sql = `INSERT INTO "public"."ae_User" ("name", "username", "email", "password", "salt", "user_type", "deleted") VALUES ($1, $2, $3, $4, $5, $6, $7)`;
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
    },
    updateUser: (user ) => {
        try {
            if (user) {
                const sql = `UPDATE "public"."ae_User" SET name = $1, username = $2, email = $3, password = $4, salt = $5, user_type = $6 WHERE id = $7`;
                client.query(sql, [user.name, user.username, user.email, user.password, user.salt, user.user_type, user.id]);
                return true;
            }else
            {
                new Error("You need to pass a valid user");
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    getCategories: (limit) => {
        try {
            if (limit > 0 && limit < 100000) {
                const sql = `SELECT * FROM "public"."ae_Category" LIMIT $1`;
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
    addCategories: (category) => {
        try {
            if(category) {
                const sql = `INSERT INTO "public"."ae_Category" ("name", "description", "deleted") VALUES ($1, $2, $3)`;
                const result = client.query(sql, [category.name, category.description, false]);
                return result;
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    getPosts: (limit) => {
        try {
            if (limit > 0 && limit < 100000) {
                const sql = `SELECT * FROM "public"."ae_Posts" LIMIT $1`;
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
    addPost: (post) => {
        try {
            if(post) {
                const sql = `INSERT INTO "public"."ae_Posts" ("title", "subtitle", "content", "about", "image_link", "posted_by", "validated", "validated_by", "category", "deleted") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
                const result = client.query(sql, [post.title, post.subtitle, post.content, post.about, post.image_link, post.posted_by, post.validated, post.validated_by, post.category, false]);
                return result;
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}