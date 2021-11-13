# ROUTES DIRECTORY

## posts.routes.js

| Routes      | What do | What Need(Can change) |
| ----------- | ----------- |
| GET: /post/show-posts      | Show all posts| Nothing |
| GET: /post/show-post/:id   | Show a specific post| Only the id in the route |
| POST: /post/add-post   | Add a post| `{title: title, subtitle: title or null, content: content, about: about, image_link: image_link, posted_by: user_id, validated: false, validated_by: user_id, category: category_id, deleted: false}` |
| PUT: /post/update-post/:id   | Update a specific post| The same information as the add-post |
| DELETE: /post/delete-post/:id   | Delete a specific post| Only the id in the route |

---

## user.routes.js

| Routes      | What do | What Need(Can change) |
| ----------- | ----------- |
| POST: /user/login      | Simple login | `{username: username, password: password}` |
| POST: /user/signup   | Add a new User | `{name: name, username: username, email: email, password: password}` |
| PATCH: /user/update-user-type/:id   | Change a user to normal user(0), editor(1) or admin(2)| id from route and a json: `{user_type: type}` |
| DELETE: /user/delete-user/:id   | Delete a specific user | Only the id in the route |

## common.routes.js

Don't do anything specific for now.