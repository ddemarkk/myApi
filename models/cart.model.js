const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userID: {
        type: Number,
        minlength: 1
    },

    items: {
        type: Array,
        minlength: 0
    }
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;