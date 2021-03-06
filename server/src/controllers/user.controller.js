const database = require("../models/database.model");
const bcrypt = require("bcrypt");

module.exports = {
    userLogin: (req, res) => {
        try {
            const { user } = req.body;
            console.log(req.body);
            database.getUsersForLogin(100).then(usersDb => {
                usersDb.rows.forEach((el, index, array) => {
                    if (el.username === user.username) {
                        bcrypt.compare(user.password, el.password, (err, r) => {
                            if (r === true) {
                                console.log(usersDb.rows);
                                console.log(el);
                                res.cookie("user", JSON.stringify({ username: el.username, user_type: el.user_type, id: el.id }), {
                                    maxAge: 1 * 24 * 60 * 60 * 60 * 60,
                                });
                                const cookie = res.getHeaders()['set-cookie'];
                                return res.status(200).send(cookie);
                            }
                        })
                    }
                });
            });


        } catch (error) {
            res.status(404).send("Error");
            console.log(error);
        }
    },
    userSignup: async (req, res) => {
        try {
            const { info } = req.body;
            info.user_type = 0;
            info.deleted = false;

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(info.password, salt);

            const user = { ...info, salt: salt, password: hash };

            console.log(user);
            database.insertUser(user).then(dbRes => {
                res.cookie("user", JSON.stringify({ username: user.username, user_type: user.user_type, id: el.id }), {
                    maxAge: 1 * 24 * 60 * 60,
                });
                console.log(dbRes);
                const cookie = res.getHeaders()['set-cookie'];
                res.status(200).send(cookie);
            });
        } catch (error) {
            res.status(500).send("Signup fail");
        }

    },
    userUpdate: async (req, res) => {
        const { info } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(info.password, salt);

        const user = { ...info, salt: salt, password: hash, id: req.params.id, user_type: req.body.user.user_type };
        console.log(req.body.user);
        if (res.locals.type >= 2) {
            database.updateUser(user);
            res.status(200).send("Update completed");
        } else {
            res.status(403).send("Permission denied, you need to be an admin")
        }

    },
    userDelete: async (req, res) => {
        if (res.locals.type >= 2) {
            database.deleteUser(req.params.id).then(dbRes => {
                console.log(dbRes);
                res.status(200).send("Post deleted successfully");
            });
        } else {
            res.status(403).send("You are not an admin")
        }
    }
};
// 531186