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
                const sql = `SELECT id, username, password, user_type FROM "public"."ae_User" WHERE deleted = false`;
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
    updateUser: (user) => {
        try {
            if (user) {
                const sql = `UPDATE "public"."ae_User" SET name = $1, username = $2, email = $3, password = $4, salt = $5, user_type = $6 WHERE id = $7`;
                client.query(sql, [user.name, user.username, user.email, user.password, user.salt, user.user_type, user.id]);
                return true;
            } else {
                new Error("You need to pass a valid user");
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    deleteUser: (user) => {
        try {
            if (user) {
                const sql = `UPDATE "public"."ae_User" SET deleted = true WHERE id = $1`;
                client.query(sql, [user.id]);
                return true;
            } else {
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
    addCategory: (category) => {
        try {
            if (category) {
                const sql = `INSERT INTO "public"."ae_Category" ("name", "description", "deleted") VALUES ($1, $2, $3)`;
                const result = client.query(sql, [category.name, category.description, false]);
                return result;
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    updateCategory: (category) => {
        try {
            if (category) {
                const sql = `UPDATE "public"."ae_Category" SET name = $1, description = $2 WHERE id = $3`;
                client.query(sql, [category.name, category.description, category.id]);
                return true;
            } else {
                new Error("You need to pass a valid category");
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    deleteCategory: (category) => {
        try {
            if (category) {
                const sql = `UPDATE "public"."ae_Category" SET deleted = true WHERE id = $1`;
                client.query(sql, [category.id]);
                return true;
            } else {
                new Error("You need to pass a valid category");
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    countCategory: (limit) => {
        try {
            if (limit > 0 && limit < 100000) {
                const sql = `SELECT count(*) as catCount  FROM "public"."ae_Category" LIMIT $1`;
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
    getPostsForFront: (limit) => {
        try {
            if (limit > 0 && limit < 100000) {
                const sql = `SELECT posts.id, posts.title, posts.subtitle, posts.content, posts.about, posts.image_link, cat.name as cat, cat.description as cat_desc, userTable.username FROM "public"."ae_Posts" AS posts INNER JOIN "public"."ae_Category" AS cat ON cat.id = posts.category INNER JOIN "public"."ae_User" AS userTable ON userTable.id = posts.posted_by WHERE posts.deleted = false AND posts.validated = true LIMIT $1`;
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
    validatePost: (post) => {
        try {
            if (post) {
                const sql = `UPDATE "public"."ae_Posts" SET validated = $1, validated_by = $2 WHERE id = $3`;
                client.query(sql, [ true, post.validated_by, post.id]);
                return true;
            } else {
                new Error("You need to pass a valid post");
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    getPosts: (limit) => {
        try {
            if (limit > 0 && limit < 100000) {
                const sql = `SELECT posts.id, posts.title, posts.subtitle, posts.content, posts.about, posts.image_link, posts.validated, posts.deleted, cat.name as cat, cat.description as cat_desc, userTable.username FROM "public"."ae_Posts" AS posts INNER JOIN "public"."ae_Category" AS cat ON cat.id = posts.category INNER JOIN "public"."ae_User" AS userTable ON userTable.id = posts.posted_by LIMIT $1`;
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
            if (post) {
                const sql = `INSERT INTO "public"."ae_Posts" ("title", "subtitle", "content", "about", "image_link", "posted_by", "validated", "validated_by", "category", "deleted") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
                const result = client.query(sql, [post.title, post.subtitle, post.content, post.about, post.image_link, post.posted_by, post.validated, post.validated_by, post.category, false]);
                return result;
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    updatePost: (post) => {
        try {
            if (post) {
                const sql = `UPDATE "public"."ae_Posts" SET title = $1, subtitle = $2, content = $3, about = $4, image_link = $5, posted_by = $6, validated = $7, validated_by = $8, category = $9 WHERE id = $10`;
                client.query(sql, [post.title, post.subtitle, post.content, post.about, post.image_link, post.posted_by, post.validated, post.validated_by, post.category, post.id]);
                return true;
            } else {
                new Error("You need to pass a valid post");
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    deletePost: (post) => {
        try {
            if (post) {
                const sql = `UPDATE "public"."ae_Posts" SET deleted = true WHERE id = $1`;
                client.query(sql, [post.id]);
                return true;
            } else {
                new Error("You need to pass a valid post");
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}