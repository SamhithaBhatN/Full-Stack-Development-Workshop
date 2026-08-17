# 📅 Day 5 – Full-Stack Development Notes

## 📌 Overview

Day 5 of the Full Stack Development Workshop focused on connecting the **frontend, Express.js backend, and MongoDB database** into one complete application.

For Day 5, I built a **Full-Stack User Management application**.

The application demonstrates:

* Frontend development
* Express.js backend development
* REST APIs
* MongoDB database integration
* CRUD operations
* Fetch API communication
* Environment variables
* Error handling

The application manages users using the following information:

```text
Name
Email
Course
```

---

# 1. What is Full-Stack Development?

Full-stack development means building and connecting the different layers of a web application.

The main layers used in this project are:

```text
Frontend
   ↓
Express.js Backend
   ↓
MongoDB Database
```

### Frontend

The frontend is responsible for:

* User interface
* HTML
* CSS
* JavaScript
* Forms
* Displaying user data
* Sending requests to the backend

### Backend

The backend is responsible for:

* Receiving requests
* Processing requests
* Providing API endpoints
* Communicating with MongoDB
* Sending responses to the frontend

### Database

MongoDB is responsible for:

* Storing user information
* Retrieving user information
* Updating user information
* Deleting user information

---

# 2. Full-Stack Application Flow

The complete application flow is:

```text
Browser
   ↓
HTML + CSS + JavaScript
   ↓
fetch()
   ↓
Express.js Server
   ↓
REST API
   ↓
MongoDB
   ↓
Response
   ↓
Express.js
   ↓
Frontend
   ↓
Updated UI
```

For example, when a user submits the form:

```text
User fills form
      ↓
JavaScript collects form data
      ↓
fetch("/users", { method: "POST" })
      ↓
Express.js receives request
      ↓
MongoDB insertOne()
      ↓
MongoDB stores user
      ↓
Express.js sends response
      ↓
Frontend displays success message
      ↓
Users are loaded again
```

---

# 3. Day 5 Project

The project created during Day 5 is:

```text
Full-Stack User Management
```

It is an:

```text
Express.js + MongoDB CRUD Application
```

The application manages users containing:

```text
Name
Email
Course
```

Example user:

```json
{
    "name": "Samhitha Bhat",
    "email": "example@gmail.com",
    "course": "MCA"
}
```

---

# 4. Project Structure

The actual Day 5 project structure is:

```text
Day-05_FullStack/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── node_modules/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
├── README.md
└── Notes.md
```

> `node_modules/` and `.env` are kept locally and are excluded from Git using `.gitignore`.

---

# 5. Important Project Files

| File / Folder       | Purpose                                                   |
| ------------------- | --------------------------------------------------------- |
| `public/`           | Contains frontend files                                   |
| `public/index.html` | User interface structure                                  |
| `public/style.css`  | Frontend styling                                          |
| `public/script.js`  | Frontend JavaScript and API communication                 |
| `server.js`         | Express.js backend server                                 |
| `.env`              | Stores environment variables                              |
| `.gitignore`        | Prevents sensitive/unnecessary files from being committed |
| `package.json`      | Project configuration and dependencies                    |
| `package-lock.json` | Locks installed dependency versions                       |
| `README.md`         | Project documentation                                     |
| `Notes.md`          | Learning notes                                            |

---

# 6. Node.js Project Setup

The Day 5 project uses Node.js.

The project was initialized as a Node.js project.

The main dependencies are:

```text
express
cors
dotenv
mongodb
```

They can be installed using:

```bash
npm install express cors dotenv mongodb
```

The installed project uses CommonJS modules:

```json
{
    "type": "commonjs"
}
```

---

# 7. Express.js

Express.js is a Node.js framework used for building web servers and APIs.

In this project, Express is used to:

* Create the server.
* Define API routes.
* Receive HTTP requests.
* Send HTTP responses.
* Serve frontend files.
* Communicate with MongoDB.

Basic setup:

```javascript
const express = require("express");

const app = express();
```

---

# 8. CORS

CORS stands for:

```text
Cross-Origin Resource Sharing
```

It allows web applications to communicate with servers when requests involve different origins.

The project uses:

```javascript
const cors = require("cors");

app.use(cors());
```

---

# 9. JSON Middleware

The backend needs to understand JSON data sent by the frontend.

This is enabled using:

```javascript
app.use(express.json());
```

For example, the frontend can send:

```json
{
    "name": "Samhitha",
    "email": "example@gmail.com",
    "course": "MCA"
}
```

Express can access this data using:

```javascript
req.body
```

---

# 10. Serving Static Frontend Files

The frontend files are stored inside:

```text
public/
```

Express can serve these files using:

```javascript
app.use(express.static("public"));
```

The project also uses Node.js path utilities when explicitly serving the main page:

```javascript
const path = require("path");
```

A root route can serve the frontend using:

```javascript
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
```

This allows the browser to access the frontend through the Express server.

---

# 11. Environment Variables

Sensitive information such as the MongoDB connection string should not be directly written inside the source code.

The project uses:

```text
.env
```

Example:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

The `.env` file is loaded using:

```javascript
require("dotenv").config();
```

The MongoDB URI is accessed using:

```javascript
const uri = process.env.MONGODB_URI;
```

The `.env` file should not be uploaded to GitHub.

---

# 12. `.gitignore`

The project uses:

```text
node_modules/
.env
```

inside `.gitignore`.

This prevents:

* `node_modules/` from being committed.
* MongoDB credentials from being exposed.
* Environment-specific configuration from being uploaded.

---

# 13. MongoDB Node.js Driver

Day 5 uses the **official MongoDB Node.js Driver**.

It does not use Mongoose.

The MongoDB driver provides classes such as:

```javascript
const {
    MongoClient,
    ObjectId,
    ServerApiVersion
} = require("mongodb");
```

### MongoClient

`MongoClient` is used to connect the Node.js application to MongoDB.

Example:

```javascript
const client = new MongoClient(uri);
```

### ObjectId

`ObjectId` is used when working with MongoDB document IDs.

Example:

```javascript
const userId = new ObjectId(req.params.id);
```

---

# 14. Connecting to MongoDB

The application connects to MongoDB using an asynchronous connection process.

Basic flow:

```text
Node.js Application
       ↓
MongoClient
       ↓
MongoDB Atlas
       ↓
Database
       ↓
Collection
```

The connection is established using:

```javascript
await client.connect();
```

The database is selected using:

```javascript
const db = client.db("Day05FullStack");
```

The users collection is selected using:

```javascript
const users = db.collection("users");
```

The database connection can also be verified using:

```javascript
await db.command({ ping: 1 });
```

---

# 15. MongoDB Database and Collection

The Day 5 project uses:

```text
Database:
Day05FullStack
```

Collection:

```text
users
```

The structure is:

```text
MongoDB
   ↓
Day05FullStack
   ↓
users
```

MongoDB stores documents inside collections.

Example document:

```json
{
    "_id": "MongoDB generated ObjectId",
    "name": "Samhitha Bhat",
    "email": "example@gmail.com",
    "course": "MCA"
}
```

---

# 16. REST API

The backend provides REST API endpoints for managing users.

The main endpoints are:

| Method   | Endpoint     | Purpose       |
| -------- | ------------ | ------------- |
| `POST`   | `/users`     | Add a user    |
| `GET`    | `/users`     | Get all users |
| `GET`    | `/users/:id` | Get one user  |
| `PUT`    | `/users/:id` | Update a user |
| `DELETE` | `/users/:id` | Delete a user |

These operations form the CRUD system.

---

# 17. CRUD

CRUD stands for:

```text
C → Create
R → Read
U → Update
D → Delete
```

In this project:

```text
Create → POST /users
Read   → GET /users
Read   → GET /users/:id
Update → PUT /users/:id
Delete → DELETE /users/:id
```

---

# 18. Create – POST Request

The frontend sends a `POST` request to:

```text
/users
```

Example:

```javascript
fetch("/users", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(user)
});
```

The backend receives the data using:

```javascript
const user = req.body;
```

The user is inserted into MongoDB using:

```javascript
const result = await users.insertOne(user);
```

A successful response can contain:

```json
{
    "message": "User added successfully",
    "insertedId": "..."
}
```

---

# 19. Read – Get All Users

The backend provides:

```text
GET /users
```

The MongoDB query is:

```javascript
const data = await users.find().toArray();
```

The result is sent to the frontend:

```javascript
res.json(data);
```

The frontend receives the users:

```javascript
const response = await fetch("/users");

const users = await response.json();
```

---

# 20. Read – Get One User

A specific user can be retrieved using:

```text
GET /users/:id
```

Example:

```text
/users/64abc123...
```

The route parameter is initially a string:

```javascript
req.params.id
```

It is converted into a MongoDB `ObjectId`:

```javascript
const userId = new ObjectId(req.params.id);
```

MongoDB can then search for the user:

```javascript
const user = await users.findOne({
    _id: userId
});
```

If the user does not exist:

```javascript
res.status(404).json({
    message: "User not found"
});
```

---

# 21. ObjectId

MongoDB automatically gives documents a unique `_id`.

Example:

```json
{
    "_id": "64abc123...",
    "name": "Samhitha"
}
```

MongoDB uses `ObjectId` for these identifiers.

The Express route parameter is a string:

```javascript
req.params.id
```

Therefore it is converted using:

```javascript
new ObjectId(req.params.id)
```

This allows MongoDB to correctly search for the document.

---

# 22. Update – PUT Request

The update endpoint is:

```text
PUT /users/:id
```

The user ID is converted to an `ObjectId`:

```javascript
const userId = new ObjectId(req.params.id);
```

MongoDB updates the document using:

```javascript
const result = await users.updateOne(
    { _id: userId },
    { $set: req.body }
);
```

`$set` changes the specified fields without replacing the entire document.

Example request:

```json
{
    "name": "Samhitha Bhat",
    "email": "samhitha@example.com",
    "course": "MCA"
}
```

Example result:

```json
{
    "acknowledged": true,
    "matchedCount": 1,
    "modifiedCount": 1
}
```

---

# 23. Delete – DELETE Request

The delete endpoint is:

```text
DELETE /users/:id
```

The user ID is converted to `ObjectId`:

```javascript
const userId = new ObjectId(req.params.id);
```

The document is deleted using:

```javascript
const result = await users.deleteOne({
    _id: userId
});
```

If the user does not exist:

```javascript
if (result.deletedCount === 0) {
    return res.status(404).json({
        message: "User not found"
    });
}
```

---

# 24. HTTP Status Codes

The application uses HTTP status codes to describe request results.

### 201 – Created

Used when a new user is successfully created.

```javascript
res.status(201)
```

### 404 – Not Found

Used when the requested user does not exist.

```javascript
res.status(404)
```

### 500 – Internal Server Error

Used when an unexpected server or database error occurs.

```javascript
res.status(500)
```

---

# 25. Frontend Form

The frontend contains a user form.

The form collects:

```text
Name
Email
Course
```

JavaScript gets the form elements:

```javascript
const userForm = document.getElementById("userForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");
```

---

# 26. Handling Form Submission

The form submission is handled using:

```javascript
userForm.addEventListener("submit", async (event) => {
    event.preventDefault();
});
```

`event.preventDefault()` prevents the browser from performing the default form submission.

JavaScript creates a user object:

```javascript
const user = {
    name: nameInput.value,
    email: emailInput.value,
    course: courseInput.value
};
```

The object is converted to JSON:

```javascript
JSON.stringify(user)
```

and sent to the Express backend.

---

# 27. Fetch API

The frontend communicates with the backend using the JavaScript `fetch()` API.

Example:

```javascript
const response = await fetch("/users");
```

For a POST request:

```javascript
const response = await fetch("/users", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(user)
});
```

The Fetch API allows the frontend to communicate with REST API endpoints.

---

# 28. Loading Users

The frontend contains a `loadUsers()` function.

Its basic flow is:

```text
Click Load Users
       ↓
fetch("/users")
       ↓
Express GET /users
       ↓
MongoDB find()
       ↓
Users returned
       ↓
JavaScript receives JSON
       ↓
User cards created
       ↓
Displayed on webpage
```

The response is converted into JavaScript data using:

```javascript
const users = await response.json();
```

---

# 29. Displaying Users Dynamically

JavaScript creates a user card for every user.

Example:

```javascript
users.forEach(user => {

    const userCard = document.createElement("div");

    userCard.className = "user-card";

    userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Course: ${user.course}</p>
    `;

    usersContainer.appendChild(userCard);
});
```

This allows the frontend to display data received from MongoDB dynamically.

---

# 30. Empty User List

If MongoDB does not contain any users, the frontend displays:

```text
No users found.
```

This is checked using:

```javascript
if (users.length === 0) {
    usersContainer.innerHTML =
        "<p>No users found.</p>";
    return;
}
```

---

# 31. Success Message

After successfully adding a user, the frontend displays:

```text
User added successfully!
```

The form is then cleared:

```javascript
userForm.reset();
```

The users are loaded again:

```javascript
loadUsers();
```

This allows the newly added user to appear immediately.

---

# 32. Error Handling

The application uses `try...catch` for asynchronous operations.

Example:

```javascript
try {
    // operation
} catch (error) {
    console.error(error);
}
```

The backend also returns error responses when operations fail.

Example:

```javascript
res.status(500).json({
    error: "Failed to add user"
});
```

Error handling is important because database and server operations can fail.

---

# 33. Starting the Server

The Express server runs on port:

```text
5000
```

The server is started using:

```bash
node server.js
```

The application is available at:

```text
http://localhost:5000
```

A successful startup displays information similar to:

```text
MongoDB Connected Successfully
Database: Day05FullStack
Collection: users
Server running at http://localhost:5000
```

---

# 34. Testing the API

The API can be tested using Postman.

### Create User

```text
POST http://localhost:5000/users
```

### Get All Users

```text
GET http://localhost:5000/users
```

### Get One User

```text
GET http://localhost:5000/users/:id
```

### Update User

```text
PUT http://localhost:5000/users/:id
```

### Delete User

```text
DELETE http://localhost:5000/users/:id
```

---

# 35. Important Debugging – Environment Variable

During Day 5, the MongoDB connection initially produced an error similar to:

```text
TypeError: Cannot read properties of undefined
(reading 'startsWith')
```

The issue was that the MongoDB URI was not available through the environment variable.

The server expected:

```javascript
const uri = process.env.MONGODB_URI;
```

If `MONGODB_URI` is not loaded correctly, its value becomes:

```text
undefined
```

MongoDB expects a valid connection string.

The issue was related to the `.env` configuration.

The important lesson was:

```text
.env
 ↓
dotenv
 ↓
process.env.MONGODB_URI
 ↓
MongoClient
 ↓
MongoDB
```

The environment variable must be loaded before creating or using the MongoDB connection.

---

# 36. Important Backend Flow

The complete backend flow is:

```text
server.js
   ↓
Express application
   ↓
Middleware
   ├── CORS
   ├── JSON parser
   └── Static files
   ↓
Routes
   ├── POST /users
   ├── GET /users
   ├── GET /users/:id
   ├── PUT /users/:id
   └── DELETE /users/:id
   ↓
MongoDB Node.js Driver
   ↓
MongoDB
   ↓
Response
```

---

# 37. Important Frontend-to-Backend Flow

```text
HTML Form
   ↓
JavaScript
   ↓
fetch()
   ↓
Express API
   ↓
MongoDB
   ↓
JSON Response
   ↓
JavaScript
   ↓
HTML UI
```

This is the main concept of the Day 5 project.

---

# 38. What I Built

For Day 5, I built a complete:

```text
Full-Stack User Management Application
```

The application includes:

* HTML frontend
* CSS styling
* JavaScript frontend logic
* Express.js backend
* REST API
* MongoDB database
* MongoDB Node.js Driver
* CRUD operations
* Form submission
* Fetch API communication
* Dynamic user display
* Environment variables
* Error handling
* Postman API testing

---

# 39. What I Learned

Through Day 5, I learned how:

* A frontend communicates with a backend.
* An Express.js server can serve frontend files.
* Express middleware works.
* JSON data can be received using `express.json()`.
* CORS can be enabled using `cors`.
* Environment variables can be used with `dotenv`.
* Node.js can connect to MongoDB.
* MongoDB databases and collections work.
* REST API endpoints can be created.
* CRUD operations work.
* `POST` requests create data.
* `GET` requests retrieve data.
* `PUT` requests update data.
* `DELETE` requests remove data.
* MongoDB `ObjectId` works.
* The Fetch API communicates with REST APIs.
* Form data can be converted into JSON.
* MongoDB data can be displayed dynamically in the frontend.
* HTTP status codes communicate request results.
* Backend errors can be handled using `try...catch`.
* Environment configuration is important for database connections.
* Frontend, backend, and database can work together as one application.

---

# 40. Key Takeaways

## Express.js

A Node.js framework used to build web servers and APIs.

## REST API

A way for applications to communicate using HTTP methods and endpoints.

## CRUD

```text
Create
Read
Update
Delete
```

## MongoDB

A NoSQL database that stores data as documents inside collections.

## MongoClient

Used by Node.js to connect to MongoDB.

## ObjectId

MongoDB's identifier type used to uniquely identify documents.

## `fetch()`

JavaScript API used to make HTTP requests.

## `req.body`

Contains data sent in the request body.

## `req.params`

Contains route parameters such as a user ID.

## `res.json()`

Sends JSON data as an HTTP response.

## `insertOne()`

Adds a document to a MongoDB collection.

## `find()`

Retrieves documents from a MongoDB collection.

## `findOne()`

Retrieves a single document.

## `updateOne()`

Updates a MongoDB document.

## `deleteOne()`

Deletes a MongoDB document.

## `.env`

Stores environment variables such as configuration and database connection information.

---

# 41. Day 5 Status

* [x] Node.js project created
* [x] Express.js installed
* [x] MongoDB driver installed
* [x] CORS installed
* [x] dotenv installed
* [x] Express server created
* [x] Frontend created
* [x] Static frontend files served by Express
* [x] CORS configured
* [x] JSON middleware configured
* [x] `.env` configured
* [x] MongoDB connected successfully
* [x] `Day05FullStack` database created/used
* [x] `users` collection created/used
* [x] POST API implemented
* [x] GET all users API implemented
* [x] GET single user API implemented
* [x] PUT update API implemented
* [x] DELETE API implemented
* [x] CRUD operations tested
* [x] Frontend form implemented
* [x] Fetch API implemented
* [x] Users displayed dynamically
* [x] User creation tested successfully
* [x] User update tested successfully
* [x] Error handling implemented
* [x] `.gitignore` configured
* [x] README.md created
* [x] Notes.md created
* [x] Full-stack application successfully run

---

# 42. 🎉 Day 5 Completed

Day 5 connected the concepts learned throughout the workshop into a complete **full-stack application**.

The project demonstrates the complete flow:

```text
Frontend
   ↓
JavaScript
   ↓
Fetch API
   ↓
Express.js
   ↓
REST API
   ↓
MongoDB Node.js Driver
   ↓
MongoDB
   ↓
JSON Response
   ↓
Frontend UI
```

This project helped me understand how the **frontend, backend, API, and database** work together as one application.

---

# 43. 📌 Scope of Day 5

These notes focus only on the concepts and implementation covered while building the Day 5 **Full-Stack User Management** application.

The following advanced topics were not part of this implementation and are therefore not treated as Day 5 concepts:

* Authentication and authorization
* JWT
* Password hashing
* React frontend integration
* Express Router
* MVC architecture
* Mongoose
* Deployment
* Production database configuration
* Advanced MongoDB aggregation
* WebSockets

These topics can be documented separately when they are actually studied and implemented.

---

# 📁 File Location

```text
Full-Stack-Development-Workshop/
└── Day-05_FullStack/
    └── Notes.md
```

---

⭐ *Day 5 completed the workshop by bringing frontend development, backend development, REST APIs, and database integration together into one working full-stack application.*