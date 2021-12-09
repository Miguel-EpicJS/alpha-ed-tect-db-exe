const database = require("../models/database.model");

module.exports = {
    getPosts: (req, res) => {
        try {
            database.getPosts(1000).then(dbPosts => {
                const posts = dbPosts.rows;
                res.status(200).send(posts);
            });        
            
        } catch (error) {
            console.log(error);

            res.status(500).send("Server error in posts controller");
        }
    },
    getPost: (req, res) => {
        try {
            let submit = false;
            database.getPosts(1000).then(dbPosts => {
                const posts = dbPosts.rows;
                posts.forEach((post, index, arr) => {
                    if (post.id == req.params.id) {
                        submit = true;
                        console.log(post);
                        console.log(JSON.stringify(post));
                        res.status(200).send(post);
                    }else if(submit === false && index == arr.length - 1)
                    {
                        res.status(404).send("Not Found");
                    }
                });
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
    },
    postUpdate: async (req, res) => {
        const {post} = req.body;
 
        const updatePost = {...post, id: req.params.id};

        if (res.locals.type >= 2) {
            database.updatePost(updatePost);
            res.status(200).send("Update completed");    
        }else{
            res.status(403).send("Permission denied, you need to be an admin")
        }
        
    },
    postDelete: async (req, res) => {
        if (res.locals.type >= 2) {
            database.deletePost(req.params.id).then(dbRes => {
                console.log(dbRes);
                res.status(200).send("Post deleted successfully");
            });    
        }else {
            res.status(403).send("You are not an admin")
        }        
    }
}