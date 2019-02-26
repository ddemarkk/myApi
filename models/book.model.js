const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String,
        minlength: 1,
    },
    author: {
        require: false,
        type: String,
        minlength: 1,
    },

    year: {
        type: String,
        minlength: 8,
    },

    description: {
        type: String,
        minlength: 1
    },

    pages: {
        type: Number,
        minlength: 1
    },

    inUserCart: {
        type: Array,
        minlength: 0
    }
})

const Book = mongoose.model('Book', BookSchema);


module.exports = Book;