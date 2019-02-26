const router = require('express').Router();

const {
    createCart,
    showItems,
    putItem,
} = require('../controllers/cart.controller');

router.post('/:id', createCart)
router.get('/:id', showItems);
router.put('/:id', putItem);


module.exports = router;