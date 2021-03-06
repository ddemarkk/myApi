const Cart = require('../models/cart.model');

class CartService {
    static async createCart(userID) {
        const cart = await Cart.findOne({userID});
        
        if(!cart) {
            
            const createdCart = await new Cart({userID, items:[]});
        
            if(!createdCart) throw new Error('Cart did not created');

            createdCart.save()

            return createdCart;
        }
    }

    static async putItem(id, item) {
        const cart = await Cart.findById(id)

        const updatedCart = cart.items.push(item);

        await Cart.findByIdAndUpdate(id, updatedCart);

        return updatedCart;
        
    }

    static async showItems(id) {

        const items = await Cart.findById(id);
        
        return items;
    }
}

module.exports = CartService;