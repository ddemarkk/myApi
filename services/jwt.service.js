const jwt = require('jsonwebtoken')

class JWTService {
    static generateJWT(data) {
        const token = jwt.sign(data, process.env.SECRET, { expiresIn: '1h' });
        return token;
    }

    static verifyJWT(data, secret) {
        return jwt.verify(data, secret);
    }
    
    static refreshToken(data) {
        const user = jwt.verify(data, secret);

        const refreshedToken = jwt.sign(user, secret, { expiresIn: '7d' });
        
        return refreshedToken;
    }
}

module.exports = JWTService;