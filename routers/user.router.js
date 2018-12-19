const router = require('express').Router();


const {
    createUser,
    findUser,
    deleteUser,
    updateUser,
    loginUser,
    changePassword,
    verifyPassword
} = require('../controllers/user.controller')


router.post('/', createUser);
router.post('/login', loginUser);
router.put('/:id', updateUser);
router.put('/changePassword/:id', changePassword);
router.get('/:authToken', verifyPassword);
router.get('/:id', findUser);
router.delete('/:id', deleteUser);


module.exports = router;

