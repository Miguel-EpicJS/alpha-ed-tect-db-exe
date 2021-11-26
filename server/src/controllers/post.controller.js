const database = require("../models/database.model");

module.exports = {
    getPosts: (req, res) => {
        try {
            let submit = false;
            database.getPosts(1000).then(dbPosts => {
                const posts = dbPosts.rows;
                if (req.params.id) {
                    posts.forEach((post, index, arr) => {
                        if (post.id == req.params.id) {
                            submit = true;
                            console.log(post);
                            console.log(JSON.stringify(post));
                            res.send(post);
                        }else if(submit === false && index == arr.length - 1)
                        {
                            res.status(404).send("Not Found");
                        }
                    });
                }else{
                    res.send(posts);
                }
            });        
            
        } catch (error) {
            console.log(error);

            res.status(500).send("Server error in posts controller");
        }
    },
    addPost: (req, res) => {
        const {post} = req.body;
        console.log(res.locals.type);

        if (res.locals.type >= 2) {
            database.addPost(post).then(dbRes => {
                console.log(dbRes);
                res.status(200).send("Post added successfully");
            });    
        }else {
            res.status(403).send("You are not an admin")
        }
    }
}