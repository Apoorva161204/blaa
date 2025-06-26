# Books REST API

A simple REST API to manage a list of books using Node.js and Express. This project demonstrates CRUD (Create, Read, Update, Delete) operations with in-memory storage.

## 🚀 Features

- **GET /books** - Retrieve all books
- **GET /books/:id** - Retrieve a specific book by ID
- **POST /books** - Add a new book
- **PUT /books/:id** - Update an existing book
- **DELETE /books/:id** - Delete a book

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **JSON** - Data format for request/response

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Postman (for testing APIs)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd books-rest-api
   ```

2. **Initialize the project**
   ```bash
   npm init -y
   ```

3. **Install dependencies**
   ```bash
   npm install express
   npm install -D nodemon
   ```

4. **Start the server**
   ```bash
   npm start
   # or for development with auto-restart
   npm run dev
   ```

5. **Server will run on:** `http://localhost:3000`

## 📚 API Endpoints

### 1. Get All Books
- **Method:** GET
- **URL:** `http://localhost:3000/books`
- **Response:**
  ```json
  {
    "success": true,
    "count": 3,
    "data": [
      {
        "id": 1,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald"
      }
    ]
  }
  ```

### 2. Get Single Book
- **Method:** GET
- **URL:** `http://localhost:3000/books/1`
- **Response:**
  ```json
  {
    "success": true,
    "data": {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald"
    }
  }
  ```

### 3. Create New Book
- **Method:** POST
- **URL:** `http://localhost:3000/books`
- **Request Body:**
  ```json
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Book created successfully",
    "data": {
      "id": 4,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger"
    }
  }
  ```

### 4. Update Book
- **Method:** PUT
- **URL:** `http://localhost:3000/books/1`
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author"
  }
  ```

### 5. Delete Book
- **Method:** DELETE
- **URL:** `http://localhost:3000/books/1`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Book deleted successfully",
    "data": {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald"
    }
  }
  ```

## 🧪 Testing with Postman

1. **Install Postman** from [postman.com](https://www.postman.com/)
2. **Create a new collection** called "Books API"
3. **Add requests** for each endpoint:
   - GET All Books
   - GET Single Book
   - POST Create Book
   - PUT Update Book
   - DELETE Remove Book

### Sample Postman Tests:

1. **Test GET /books:**
   - Method: GET
   - URL: `http://localhost:3000/books`

2. **Test POST /books:**
   - Method: POST
   - URL: `http://localhost:3000/books`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
     ```json
     {
       "title": "New Book Title",
       "author": "Author Name"
     }
     ```

## 🔍 Error Handling

The API includes comprehensive error handling:
- **400** - Bad Request (missing required fields)
- **404** - Not Found (book doesn't exist)
- **500** - Internal Server Error

## 🏗 Project Structure

```
books-rest-api/
│
├── server.js          # Main server file
├── package.json       # Project dependencies
├── README.md          # Project documentation
└── .gitignore        # Git ignore file
```

## 📝 Key Concepts Covered

- **REST API** - Representational State Transfer architecture
- **Express.js** - Web framework and routing
- **HTTP Methods** - GET, POST, PUT, DELETE
- **JSON Handling** - Parsing and responding with JSON
- **Middleware** - express.json() for parsing requests
- **CRUD Operations** - Create, Read, Update, Delete
- **Error Handling** - Proper status codes and error responses
- **In-memory Storage** - Array-based data storage

## 🤔 Interview Questions Covered

1. **What is REST?** - Architectural style for web services
2. **HTTP Methods** - GET (retrieve), POST (create), PUT (update), DELETE (remove)
3. **Express Routing** - app.get(), app.post(), app.put(), app.delete()
4. **Middleware** - Functions that execute during request-response cycle
5. **JSON Parsing** - express.json() middleware
6. **Status Codes** - 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Error)
7. **Error Handling** - Try-catch blocks and error middleware
8. **CORS** - Cross-Origin Resource Sharing (can be added with cors middleware)
9. **Request/Response** - req (request object), res (response object)
10. **API Testing** - Using Postman to test endpoints

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Apoorva P - Elevate Labs Webdevelepment

---

**Happy Coding! 🚀**
