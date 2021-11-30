const database = require("../models/database.model");

module.exports = {
    getCategories: (req, res) => {
        try {
            let submit = false;
            database.getCategories(1000).then(dbCategories => {
                const categories = dbCategories.rows;
                if (req.params.id) {
                    categories.forEach((category, index, arr) => {
                        if (category.id == req.params.id) {
                            submit = true;
                            console.log(category);
                            console.log(JSON.stringify(category));
                            res.send(category);
                        }else if(submit === false && index == arr.length - 1)
                        {
                            res.status(404).send("Not Found");
                        }
                    });
                }else{
                    res.send(categories);
                }
            });        
            
        } catch (error) {
            console.log(error);

            res.status(500).send("Server error in categories controller");
        }
    },
    setCategory: (req, res) => {
        const {category} = req.body;
        console.log(res.locals.type);

        if (res.locals.type >= 2) {
            database.addCategory(category).then(dbRes => {
                console.log(dbRes);
                res.status(200).send("Category added successfully");
            });    
        }else {
            res.status(403).send("You are not an admin")
        }
    },
    categoryUpdate: async (req, res) => {
        const {category} = req.body;
 
        const cookies = JSON.parse(req.cookies.user);

        const updateCategory = {...category, id: req.params.id};

        if (cookies.user_type >= 2) {
            database.updateCategory(updateCategory);
            res.status(200).send("Update completed");    
        }else{
            res.status(403).send("Permission denied, you need to be an admin")
        }
        
    }
}