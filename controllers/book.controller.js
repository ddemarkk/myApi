const {
    createBook,
    deleteBook,
    updateBook,
    getBooks,
    getBookById,
    addToCart
} = require('../services/book.service');

exports.createBook = async (req, res) => res.json(await createBook(req.body));

exports.deleteBook = async (req, res) => res.json(await deleteBook(req.params.id));

exports.updateBook = async (req, res) => res.json(await updateBook(req.params.id, req.body));

exports.addToCart = async (req, res) => res.json(await addToCart(req.params.id, req.body));

exports.getBooks = async (req, res) => res.json(await getBooks(req.query));

exports.getBookById = async (req, res) => res.json(await getBookById(req.params.id));
