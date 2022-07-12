const { login,logout } = require("../modules")
const { verify } = require("../jwtverify/index");

const route = (app) => {
    app.post("/login",login)
    app.get("/logout",verify,logout);
}

module.exports = route