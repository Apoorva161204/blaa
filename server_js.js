const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// In-memory storage for books
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" }
];

// Helper function to find book by ID
const findBookById = (id) => books.find(book => book.id === parseInt(id));

// Helper function to get next ID
const getNextId = () => books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;

// GET /books - Get all books
app.get('/books', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// GET /books/:id - Get a single book by ID
app.get('/books/:id', (req, res) => {
  try {
    const book = findBookById(req.params.id);
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
  try {
    const { title, author } = req.body;
    
    // Validation
    if (!title || !author) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both title and author'
      });
    }
    
    // Create new book
    const newBook = {
      id: getNextId(),
      title: title.trim(),
      author: author.trim()
    };
    
    books.push(newBook);
    
    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: newBook
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// PUT /books/:id - Update a book by ID
app.put('/books/:id', (req, res) => {
  try {
    const book = findBookById(req.params.id);
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    const { title, author } = req.body;
    
    // Validation
    if (!title || !author) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both title and author'
      });
    }
    
    // Update book
    book.title = title.trim();
    book.author = author.trim();
    
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// DELETE /books/:id - Delete a book by ID
app.delete('/books/:id', (req, res) => {
  try {
    const bookIndex = books.findIndex(book => book.id === parseInt(req.params.id));
    
    if (bookIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    const deletedBook = books.splice(bookIndex, 1)[0];
    
    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: deletedBook
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// Handle 404 for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📚 Books API is ready!`);
  console.log(`\nAvailable endpoints:`);
  console.log(`GET    /books     - Get all books`);
  console.log(`GET    /books/:id - Get book by ID`);
  console.log(`POST   /books     - Create new book`);
  console.log(`PUT    /books/:id - Update book by ID`);
  console.log(`DELETE /books/:id - Delete book by ID`);
});

module.exports = app;