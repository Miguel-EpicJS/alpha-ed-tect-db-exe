require("dotenv").config()
console.log(process.env.DB_LINK_POSTGRES);

const { Client } = require("pg");
const client = new Client({
    connectionString: process.env.DB_LINK_POSTGRES
});
client.connect();

const sql = ' SELECT * FROM "public"."public.ae_Admin" LIMIT 100'

client.query(sql, (err, res) => {
    if (err) {
        console.log('error: ', err);
        process.exit(1);
    }
    console.log(res)
    process.exit(0);
});

module.exports = client;