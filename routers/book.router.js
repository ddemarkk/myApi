const router = require('express').Router();

const {
    createBook,
    deleteBook,
    updateBook,
    getBooks,
    getBookById
} = require('../controllers/book.controller');

const {
    auth
} = require('../services/auth.service');

router.post('/', auth, createBook);
router.put('/:id', auth, updateBook);
router.delete('/:id', auth, deleteBook);
router.get('/:id', getBookById);
router.get('/', getBooks);

module.exports = router;