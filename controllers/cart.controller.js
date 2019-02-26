const {
    createCart,
    showItems,
    putItem
} = require('../services/cart.service');

exports.createCart = async (req, res) => res.json(await createCart(req.params.id));

exports.showItems = async (req, res) => res.json(await showItems(req.params.id));

exports.putItem = async (req, res) => res.json(await putItem(req.params.id, req.body));