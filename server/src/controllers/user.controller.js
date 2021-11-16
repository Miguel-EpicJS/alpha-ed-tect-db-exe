const database = require("../models/database.model");
const bcrypt = require("bcrypt");

module.exports = {
    userLogin: (req, res) => {
        const {user} = req.body;
        console.log(user);
        database.getUsers(100).then(usersDb => {
            usersDb.rows.forEach(el => {
                if (el.Username === user.username) {
                    bcrypt.compare(user.password, el.Password, (err, r) => {
                        if (r === true) {
                            console.log(usersDb.rows);
                            res.cookie("user", JSON.stringify({username: el.Username, user_type: el.User_type}), {
                                maxAge: 1 * 24 * 60 * 60,
                                httpOnly: true
                            });
                            
                            res.status(200).send("Login ok");
                        }else{
                            console.log(el);
                        }
                    })                    
                }
            });
        });
    },
    userSignup: async (req, res) => {
        const {info} = req.body;
        info.user_type = 0;
        info.deleted = false;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(info.password, salt);

        const user = {...info, salt: salt, password: hash};

        console.log(user);
        database.insertUser(user).then(dbRes => {
            res.cookie("user", JSON.stringify({username: user.username, user_type: user.user_type}), {
                maxAge: 1 * 24 * 60 * 60,
                httpOnly: true
            });
            console.log(dbRes);
            res.status(200).send("Signup completed");
        });
    }
};