const  jwt = require('jsonwebtoken')

exports.generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{expire:"Id"})
} 