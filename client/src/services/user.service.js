import axios from "axios";

export const UserService = {
  async makeLogin(user) {
    console.log("response");
    await fetch("http://127.0.0.1:4000/user/login", {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ "user": {
        "username" : user.username,
        "password" : user.password
      }}),
    }).then(response => {console.log(response)});
    return true;
  },
  async makeSignup() {
    const response = await axios.get("http://127.0.0.1:4000/user/signup");
    console.log(response);
    return response;  
  },
};