const jwt = require('jsonwebtoken')

class JWTService {
    static generateJWT(data){
        const token = jwt.sign(data, process.env.SECRET);
        return token;
    }

    static verifyJWT(data, secret){
        return jwt.verify(data, secret);
    }
}

module.exports = JWTService;