module.exports = {
    loginCookie: (req, res, next) => {
        const {cookies} = req;
        if (cookies["user"]) {
            console.log(req.body)
            console.log(cookies);
            res.status(200).send("You're already logged");
        }else{
            console.log(req.body);
            next();
        }
    },
    verifyCookie: (req, res, next) => {
        const {cookies} = req;
        console.log(cookies);
        if (cookies["user"]) {
            res.locals.user = JSON.parse(cookies["user"]).username;
            res.locals.type = JSON.parse(cookies["user"]).user_type;

            next();
        }else{
            res.status(200).send("You aren't logged");
        }
    }
}