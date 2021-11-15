module.exports = {
    loginCookie: (req, res, next) => {
        const {cookies} = req;
        if (cookies["user"]) {
            console.log(cookies);
            res.status(200).send("You're already logged");
        }else{
            next();
        }
    },
    verifyCookie: (req, res, next) => {
        const {cookies} = req;
        console.log(cookies);
        if (cookies["user"]) {
            res.locals.user = cookies["user"].username;
            res.locals.type = cookies["user"].user_type;
        }else{
            res.status(200).send("You aren't logged");
        }
    }
}