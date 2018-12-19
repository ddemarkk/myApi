const {
    createUser,
    findUser,
    deleteUser,
    updateUser,
    loginUser,
    changePassword,
    verifyPassword
} = require('../services/user.service')

exports.createUser = async (req, res) => res.json(await createUser(req.body));

exports.findUser = async (req, res) => res.json(await findUser(req.params.id, req.body));

exports.deleteUser = async (req, res) => res.json(await deleteUser(req.params.id));

exports.updateUser = async (req, res) => res.json(await updateUser(req.params.id, req.body));

exports.loginUser = async (req, res) => res.json(await loginUser(req.body));

exports.changePassword = async (req, res) => res.json(await changePassword(req.params.id, req.body));

exports.verifyPassword = async(req, res) => res.json(await verifyPassword(req.params.authToken))