````markdown
# 🚀 Day 05 - Full-Stack Development

## Full-Stack User Management System

A simple full-stack CRUD application built using HTML, CSS, JavaScript, Express.js, and MongoDB.

This project demonstrates frontend-backend communication, REST APIs, CRUD operations, and MongoDB database integration.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- Node.js
- Express.js
- MongoDB
- MongoDB Node.js Driver
- CORS
- dotenv
- Postman
- Git and GitHub

---

## 📂 Project Structure

```text
Day-05_FullStack/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
````

---

## 📄 Project Files

### `server.js`

The main Express.js backend.

It:

* Creates the Express server
* Enables CORS
* Parses JSON requests
* Serves the frontend from `public`
* Connects to MongoDB
* Defines CRUD API routes
* Starts the server on port `5000`

### `public/index.html`

The main frontend page containing the user form, Load Users button, and user display area.

### `public/style.css`

Contains the styling for the frontend.

### `public/script.js`

Handles frontend functionality using the Fetch API.

It:

* Collects user form data
* Sends POST requests
* Loads users with GET
* Displays users dynamically
* Shows success and error messages

### `.env`

Stores environment variables such as the MongoDB connection string.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Do not commit `.env` to GitHub.

### `.gitignore`

```text
node_modules/
.env
```

---

## 📦 Installation

Navigate to the project:

```powershell
cd "D:\Samhitha Bhat\Full-Stack-Development-Workshop\Day-05_FullStack"
```

Install dependencies:

```powershell
npm install
```

---

## 🔐 Environment Configuration

Create `.env` in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Replace the MongoDB URI with your MongoDB Atlas connection string.

---

## ▶️ Run the Application

Start the server:

```powershell
node server.js
```

Successful startup should show:

```text
MongoDB Connected Successfully
Database: Day05FullStack
Collection: users
Server running at http://localhost:5000
```

Open the application in your browser:

```text
http://localhost:5000
```

---

# 🔄 CRUD API

The application implements Create, Read, Update, and Delete operations.

## 1. Create User

```http
POST /users
```

Example request:

```json
{
    "name": "Samhitha",
    "email": "samhitha@example.com",
    "course": "MCA"
}
```

Example response:

```json
{
    "message": "User added successfully",
    "insertedId": "..."
}
```

---

## 2. Get All Users

```http
GET /users
```

Returns all users from the `users` collection.

---

## 3. Get One User

```http
GET /users/:id
```

The MongoDB `ObjectId` identifies the requested user.

---

## 4. Update User

```http
PUT /users/:id
```

Example request:

```json
{
    "name": "Samhitha Bhat",
    "email": "samhitha@example.com",
    "course": "MCA"
}
```

Example response:

```json
{
    "message": "User updated successfully",
    "result": {
        "acknowledged": true,
        "matchedCount": 1,
        "modifiedCount": 1
    }
}
```

---

## 5. Delete User

```http
DELETE /users/:id
```

Example response:

```json
{
    "message": "User deleted successfully",
    "result": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```

---

## 🔗 API Summary

| Method | Endpoint     | Purpose        |
| ------ | ------------ | -------------- |
| POST   | `/users`     | Add a new user |
| GET    | `/users`     | Get all users  |
| GET    | `/users/:id` | Get one user   |
| PUT    | `/users/:id` | Update a user  |
| DELETE | `/users/:id` | Delete a user  |

---

# 🗄️ MongoDB Structure

### Database

```text
Day05FullStack
```

### Collection

```text
users
```

Example document:

```json
{
    "_id": "MongoDB ObjectId",
    "name": "Samhitha",
    "email": "samhitha@example.com",
    "course": "MCA"
}
```

---

# 🔄 Application Flow

```text
User
  ↓
Frontend
HTML + CSS + JavaScript
  ↓
Fetch API
  ↓
Express.js REST API
  ↓
MongoDB
  ↓
users Collection
  ↓
Response
  ↓
Frontend
```

---

# 🧠 Concepts Learned

* Node.js
* Express.js
* Express middleware
* REST APIs
* HTTP methods
* CRUD operations
* MongoDB connection
* MongoDB databases
* MongoDB collections
* MongoDB documents
* MongoDB ObjectId
* Express route parameters
* JSON request and response
* Fetch API
* Frontend-backend communication
* Environment variables
* `.env`
* CORS
* Static file serving
* Error handling
* Postman API testing

---

# 🧪 API Testing

The API can be tested using Postman.

```text
POST   http://localhost:5000/users
GET    http://localhost:5000/users
GET    http://localhost:5000/users/:id
PUT    http://localhost:5000/users/:id
DELETE http://localhost:5000/users/:id
```

---

# 🐛 Error Encountered and Fixed

During development, the MongoDB connection initially produced:

```text
TypeError: Cannot read properties of undefined (reading 'startsWith')
```

The issue was that the MongoDB URI was not available through the environment variable.

The server was configured to use:

```javascript
const uri = process.env.MONGODB_URI;
```

and the MongoDB connection string was stored in `.env`.

After correcting the environment configuration, MongoDB connected successfully.

---

# 🔐 Security

Sensitive MongoDB configuration is stored in `.env`.

`.gitignore` excludes:

```text
node_modules/
.env
```

Never commit MongoDB usernames, passwords, or connection strings to GitHub.

---

# 📚 What This Project Demonstrates

This project demonstrates a basic full-stack architecture:

```text
Frontend
   ↓
JavaScript Fetch API
   ↓
Express.js REST API
   ↓
MongoDB
   ↓
Database Response
   ↓
Express.js
   ↓
Frontend
```

---

# ✅ Day 05 Progress

* [x] Created Node.js project
* [x] Installed Express.js
* [x] Installed MongoDB driver
* [x] Installed CORS
* [x] Installed dotenv
* [x] Created Express server
* [x] Connected Express.js with MongoDB
* [x] Created MongoDB database
* [x] Created `users` collection
* [x] Implemented POST API
* [x] Implemented GET API
* [x] Implemented GET by ID API
* [x] Implemented PUT API
* [x] Implemented DELETE API
* [x] Created frontend
* [x] Connected frontend with backend
* [x] Tested CRUD operations
* [x] Added environment variables
* [x] Added `.gitignore`
* [x] Successfully ran the full-stack application

---

# 🚀 Future Improvements

* Add Edit and Delete buttons to the frontend
* Add form validation
* Add loading indicators
* Add better error messages
* Add responsive UI
* Add search functionality
* Add authentication
* Add pagination
* Deploy the application

---

## 👩‍💻 Author

**Samhitha Bhat**

BCA Graduate | MCA Aspirant | Full-Stack Development Learner

---

⭐ This project was created as part of my Full-Stack Development Workshop learning journey.

```
```