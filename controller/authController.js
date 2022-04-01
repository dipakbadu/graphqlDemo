const jwt = require("jsonwebtoken")
const signIn = async (args) => {
    const user = { userName: "admin", password: "hello" }

    if(args.userName === user.userName) {
        return  {token: jwt.sign({name: args.name}, process.env.JWT_SECRET, {expiresIn: '1d'}) }
    } else throw new Error("Invalid user name")
}

module.exports = {
    signIn
}