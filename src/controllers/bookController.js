const bookService = require('../services/bookService');

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await bookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getBookById: async (req, res) => {
    try {
      const book = await bookService.getBookById(req.params.id);
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createBook: async (req, res) => {
    try {
      const bookData = {
        title: req.body.title,
        author: req.body.author,
        published_year: req.body.published_year,
        stock: req.body.stock,
        isbn: req.body.isbn
      };
      const newBook = await bookService.createBook(bookData);
      res.status(201).json(newBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  
};

module.exports = bookController;