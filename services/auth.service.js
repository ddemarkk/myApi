const { verifyJWT } = require('./jwt.service');
const { findUser } = require('./user.service');

class AuthService {
    static auth(req, res, next) {
        const token = req.headers['x-auth'];

        if (!token) {
            throw new Error('User not authorized.');
        }
        
        const decoded = verifyJWT(token, process.env.SECRET);

        const user = findUser(decoded.id);

        if (!user) {
            throw new Error('User not exist.');
        }

        req.decoded = decoded;

        next();
    }
} 

module.exports = AuthService;