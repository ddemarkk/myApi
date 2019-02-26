const Book = require('../models/book.model');

class BookService {
    static async createBook(newBook) {
        const book = await new Book(newBook);

        if (!book) {
            throw new Error('Book not created.');
        }
        
        return await book.save();
    }

    static async deleteBook(id) {
        const book = await Book.findByIdAndDelete(id);
        
        if(!book) throw new Error('Cannot delete book');

        return book;

    }

    static async updateBook(id, newBook) {
        const book = await Book.findByIdAndUpdate(id, newBook);
        
        if(!book) throw new Error('Cannot update book');

        return book;

    }

    static async getBooks(bookQuery) {
        const book = await Book.find(bookQuery);
        
        if(!book) throw new Error('Cannot update book');

        return book;

    }

    static async getBookById(bookId) {
        const book = await Book.findById(bookId);
        
        if(!book) throw new Error('Cannot update book');

        return book;

    }

    static async addToCart(id, userID) {
        const book = await Book.findById(id);

        const addedBook = book.inUserCart.push(userID);

        await Book.findByIdAndUpdate(id, addedBook)
        console.log(book.inUserCart)
        if(!book) throw new Error('Book is not exist');

        return addedBook;

    }

}

module.exports = BookService;