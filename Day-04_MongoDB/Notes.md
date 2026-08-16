# 📅 Day 4 – MongoDB

## 📌 Overview

Day 4 of the Full Stack Development Workshop focused on connecting an Express.js backend with MongoDB.

For this project, I created a Node.js and Express.js backend and connected it to a MongoDB Atlas database using Mongoose.

I also used Postman to test the API endpoints and verify that data could be stored in and retrieved from MongoDB.

The main concepts covered were:

- MongoDB
- MongoDB Atlas
- MongoDB Compass
- Mongoose
- Express.js
- REST APIs
- GET requests
- POST requests
- JSON
- Environment variables
- Postman API testing

---

## 🎯 Learning Objectives

- Understand MongoDB and NoSQL databases.
- Understand MongoDB Atlas.
- Understand the difference between a database, collection, and document.
- Connect Node.js and Express.js with MongoDB.
- Understand the purpose of Mongoose.
- Create a Mongoose schema.
- Create a Mongoose model.
- Store documents in MongoDB.
- Retrieve documents from MongoDB.
- Create REST API endpoints.
- Test APIs using Postman.
- Use environment variables with `.env`.
- Protect sensitive information using `.gitignore`.

---

# 1. What is MongoDB?

MongoDB is a NoSQL database that stores data in a document-oriented format.

Unlike traditional relational databases that store data in rows and tables, MongoDB stores data as documents inside collections.

A MongoDB document looks similar to JSON:

```json
{
  "name": "Samhitha Bhat",
  "email": "samhitha@example.com",
  "course": "MCA"
}
```

---

# 2. MongoDB Structure

The basic MongoDB structure is:

```text
MongoDB
   │
   └── Database
         │
         └── Collection
               │
               └── Document
```

### Database

A database contains collections.

### Collection

A collection contains documents.

### Document

A document contains individual data.

Example:

```json
{
  "name": "Samhitha Bhat",
  "email": "samhitha@example.com",
  "course": "MCA"
}
```

---

# 3. MongoDB Atlas

For this project, MongoDB Atlas was used instead of a locally running MongoDB server.

MongoDB Atlas is a cloud-based service for hosting MongoDB databases.

The application connects to the Atlas cluster using a MongoDB connection string.

A MongoDB Atlas connection string generally begins with:

```text
mongodb+srv://
```

The actual connection string and password were stored in the `.env` file and were not included in the source code.

---

# 4. MongoDB Compass

MongoDB Compass is a graphical user interface for working with MongoDB databases.

It can be used to:

- View databases.
- View collections.
- View documents.
- Inspect stored data.
- Work with MongoDB visually.

In this project, the database was hosted using MongoDB Atlas.

---

# 5. Day 4 Project Location

The Day 4 project was created inside:

```text
Full-Stack-Development-Workshop/
└── Day-04_MongoDB/
```

The backend application was created inside the `server` folder.

---

# 6. Project Structure

The project structure is:

```text
Day-04_MongoDB/
│
└── server/
    │
    ├── models/
    │   └── User.js
    │
    ├── .env
    ├── .gitignore
    ├── index.js
    ├── package.json
    └── package-lock.json
```

---

# 7. Initializing the Node.js Project

Inside the `server` folder, a Node.js project was initialized using:

```bash
npm init -y
```

This created the `package.json` file.

---

# 8. Installing Dependencies

The main dependencies used for the backend were installed using:

```bash
npm install express mongoose cors
```

`dotenv` was also used for environment variables:

```bash
npm install dotenv
```

---

# 9. Packages Used

## Express.js

Express.js is used to create the backend server and API routes.

```javascript
const express = require("express");
```

---

## Mongoose

Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

It provides a structured way to work with MongoDB.

Mongoose can be used to:

- Define schemas.
- Create models.
- Create documents.
- Save documents.
- Retrieve documents.

```javascript
const mongoose = require("mongoose");
```

---

## CORS

CORS allows requests between different origins.

```javascript
const cors = require("cors");
```

---

## dotenv

dotenv loads environment variables from the `.env` file.

```javascript
require("dotenv").config();
```

---

# 10. Express Server Setup

The Express application is created using:

```javascript
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
```

---

# 11. Middleware

The application uses CORS and JSON middleware:

```javascript
app.use(cors());
app.use(express.json());
```

### CORS Middleware

```javascript
app.use(cors());
```

This allows requests from different origins.

### JSON Middleware

```javascript
app.use(express.json());
```

This allows Express to read JSON data from request bodies.

---

# 12. Environment Variables

The MongoDB connection string contains sensitive information such as database credentials.

Instead of placing the connection string directly inside the source code, it was stored in a `.env` file.

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster-url/database
PORT=5000
```

The application accesses these values using:

```javascript
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
```

The actual username, password, and cluster URL should never be exposed publicly.

---

# 13. Protecting the `.env` File

The `.env` file contains sensitive database credentials.

Therefore, it should not be uploaded to GitHub.

The `.gitignore` file contains:

```gitignore
node_modules/
.env
```

This prevents the following from being committed:

- `node_modules`
- `.env`

---

# 14. Connecting to MongoDB Atlas

Mongoose was used to connect the Express application to MongoDB Atlas.

Example:

```javascript
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
```

After the Atlas connection was configured successfully, the terminal displayed:

```text
MongoDB connected successfully!
Server running on http://localhost:5000
```

---

# 15. Initial MongoDB Connection Error

Initially, the application attempted to connect to a local MongoDB server.

The following error appeared:

```text
MongoDB connection failed: connect ECONNREFUSED 127.0.0.1:27017
```

This occurred because a local MongoDB server was not running.

The `MongoDB` Windows service was also checked, but no MongoDB service was installed.

Since MongoDB Compass was available, it was initially considered for working with MongoDB locally. However, the project was ultimately configured to use MongoDB Atlas.

After configuring the Atlas connection string in `.env`, the application connected successfully.

Successful output:

```text
MongoDB connected successfully!
Server running on http://localhost:5000
```

---

# 16. Mongoose Schema

A Mongoose schema defines the structure of documents.

For this project, a `User` schema was created with:

- `name`
- `email`
- `course`

Example:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  course: {
    type: String,
    required: true
  }
});
```

---

# 17. Mongoose Model

The schema is converted into a model:

```javascript
const User = mongoose.model("User", userSchema);
```

The model can be exported:

```javascript
module.exports = User;
```

The model can then be imported into `index.js`:

```javascript
const User = require("./models/User");
```

---

# 18. User Document

A user document sent to the API looks like:

```json
{
  "name": "Samhitha Bhat",
  "email": "samhitha@example.com",
  "course": "MCA"
}
```

MongoDB automatically generates an `_id` for every document.

Example:

```json
{
  "_id": "6a816339c46e04c97d952ae5",
  "name": "Samhitha Bhat",
  "email": "samhitha@example.com",
  "course": "MCA",
  "__v": 0
}
```

---

# 19. What is `_id`?

MongoDB automatically creates a unique `_id` for every document.

Example:

```text
"_id": "6a816339c46e04c97d952ae5"
```

The `_id` is used to uniquely identify a document.

---

# 20. What is `__v`?

Mongoose adds a `__v` field to documents by default.

Example:

```json
"__v": 0
```

It is used internally by Mongoose for document versioning.

For this beginner project, it can simply be understood as a Mongoose-managed version field.

---

# 21. POST API

The project contains a POST endpoint:

```text
POST /api/users
```

Complete URL:

```text
http://localhost:5000/api/users
```

The endpoint is used to create a new user.

---

# 22. POST Route

The POST route receives user information and saves it to MongoDB.

Example:

```javascript
app.post("/api/users", async (req, res) => {
  try {
    const { name, email, course } = req.body;

    const newUser = new User({
      name,
      email,
      course
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message
    });
  }
});
```

---

# 23. Testing POST Using Postman

Postman was used to test the API.

### Method

```text
POST
```

### URL

```text
http://localhost:5000/api/users
```

### Body

In Postman:

```text
Body → raw → JSON
```

The following JSON was sent:

```json
{
  "name": "Samhitha Bhat",
  "email": "samhitha@example.com",
  "course": "MCA"
}
```

---

# 24. POST Response

The POST request successfully created a user.

The response contained a newly generated MongoDB `_id`.

Example:

```json
{
  "_id": "6a816339c46e04c97d952ae5",
  "name": "Samhitha Bhat",
  "email": "samhitha@example.com",
  "course": "MCA",
  "__v": 0
}
```

The API returned the HTTP status:

```text
201 Created
```

The `201 Created` status indicates that a new resource was successfully created.

---

# 25. Data Stored in MongoDB

The POST request created a document in MongoDB.

The stored document contains:

```text
_id
name
email
course
__v
```

The basic flow is:

```text
Postman
   ↓
POST /api/users
   ↓
Express Server
   ↓
Mongoose
   ↓
MongoDB Atlas
   ↓
Document Created
```

---

# 26. GET API

A GET endpoint was created to retrieve users from MongoDB.

```text
GET /api/users
```

Complete URL:

```text
http://localhost:5000/api/users
```

---

# 27. GET Route

The GET route retrieves users using Mongoose:

```javascript
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message
    });
  }
});
```

The following Mongoose method is used:

```javascript
User.find();
```

It retrieves the users stored in the MongoDB collection.

---

# 28. Testing GET Using Postman

The GET API was tested using Postman.

### Method

```text
GET
```

### URL

```text
http://localhost:5000/api/users
```

A request body is not required for this GET request.

---

# 29. GET Response

The GET request successfully returned the users stored in MongoDB.

During testing, multiple POST requests were sent, so multiple user documents were present.

Example response:

```json
[
  {
    "_id": "6a816339c46e04c97d952ae5",
    "name": "Samhitha Bhat",
    "email": "samhitha@example.com",
    "course": "MCA",
    "__v": 0
  },
  {
    "_id": "6a8163ecc46e04c97d952ae6",
    "name": "Samhitha Bhat",
    "email": "samhitha@example.com",
    "course": "MCA",
    "__v": 0
  },
  {
    "_id": "6a8165e7c46e04c97d952ae7",
    "name": "Samhitha Bhat",
    "email": "samhitha@example.com",
    "course": "MCA",
    "__v": 0
  }
]
```

This confirmed that the application could retrieve documents successfully from MongoDB Atlas.

---

# 30. API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check the server |
| POST | `/api/users` | Create a user |
| GET | `/api/users` | Retrieve all users |

---

# 31. HTTP Methods Used

## POST

POST is used to send data to the server and create a new resource.

```text
POST /api/users
```

## GET

GET is used to retrieve data from the server.

```text
GET /api/users
```

---

# 32. HTTP Status Codes

The POST API returns:

```text
201 Created
```

This indicates that a new resource was successfully created.

For server-side errors, the application returns:

```text
500 Internal Server Error
```

---

# 33. Postman

Postman was used to test the backend API.

### POST Request

```text
POST http://localhost:5000/api/users
```

### GET Request

```text
GET http://localhost:5000/api/users
```

Postman helped verify that:

- The API endpoint was working.
- JSON data was being received.
- Data was being stored in MongoDB.
- MongoDB data could be retrieved.
- The server was returning JSON responses.

---

# 34. Complete Application Flow

## Creating a User

```text
Postman
   │
   │ POST /api/users
   │
   │ JSON data
   ▼
Express Server
   │
   ▼
Mongoose User Model
   │
   ▼
MongoDB Atlas
   │
   ▼
User Document Stored
   │
   ▼
Express Server
   │
   ▼
Postman
```

## Retrieving Users

```text
Postman
   │
   │ GET /api/users
   ▼
Express Server
   │
   ▼
Mongoose
   │
   ▼
MongoDB Atlas
   │
   ▼
User Documents
   │
   ▼
Express Server
   │
   ▼
Postman
```

---

# 35. Running the Project

Open a terminal inside:

```text
Day-04_MongoDB/server
```

Run:

```bash
node index.js
```

Expected output:

```text
MongoDB connected successfully!
Server running on http://localhost:5000
```

Keep the server running while testing the APIs in Postman.

---

# 36. Important Mongoose Methods

## `mongoose.connect()`

Connects the application to MongoDB.

```javascript
mongoose.connect(MONGO_URI);
```

---

## `new User()`

Creates a new document using the User model.

```javascript
const newUser = new User({
  name,
  email,
  course
});
```

---

## `.save()`

Saves a document to MongoDB.

```javascript
await newUser.save();
```

---

## `.find()`

Retrieves documents from MongoDB.

```javascript
const users = await User.find();
```

---

# 37. Important Concepts

## MongoDB

A NoSQL document database.

## MongoDB Atlas

A cloud-hosted MongoDB service.

## MongoDB Compass

A graphical interface for working with MongoDB.

## Database

Contains collections.

## Collection

Contains documents.

## Document

Contains individual pieces of data.

## Mongoose

An ODM library used to interact with MongoDB from Node.js.

## Schema

Defines the structure of a document.

## Model

Provides an interface for working with documents in a MongoDB collection.

## API

Provides communication between applications and the backend.

## Postman

Used to test APIs.

## `.env`

Stores environment variables and sensitive configuration.

## `.gitignore`

Prevents files such as `.env` and `node_modules` from being committed.

---

# 38. What I Learned

Through Day 4, I learned how to:

- Create a Node.js backend.
- Create an Express server.
- Install and use Mongoose.
- Create a MongoDB Atlas cluster.
- Configure a MongoDB database user.
- Configure MongoDB Atlas network access.
- Connect Express to MongoDB Atlas.
- Use environment variables.
- Protect database credentials using `.env`.
- Create a `.gitignore` file.
- Create a Mongoose schema.
- Create a Mongoose model.
- Create MongoDB documents.
- Save documents using `.save()`.
- Retrieve documents using `.find()`.
- Create POST API endpoints.
- Create GET API endpoints.
- Test APIs using Postman.
- Understand basic backend-to-database communication.

---

# 39. Key Takeaways

### MongoDB

MongoDB stores data as documents inside collections.

### MongoDB Atlas

MongoDB Atlas provides a cloud-based MongoDB database.

### MongoDB Compass

MongoDB Compass provides a graphical interface for interacting with MongoDB.

### Mongoose

Mongoose provides a structured way to work with MongoDB in Node.js.

### Schema

A schema defines the structure of documents.

### Model

A model provides methods for working with documents.

### POST

POST is used to create a new resource.

### GET

GET is used to retrieve resources.

### Postman

Postman is used to test API requests and responses.

### `.env`

`.env` keeps sensitive configuration outside the source code.

---

# 40. Day 4 Progress

- [x] Day 4 folder created
- [x] Node.js project initialized
- [x] Express installed
- [x] Mongoose installed
- [x] CORS installed
- [x] dotenv configured
- [x] MongoDB Atlas cluster created
- [x] Database user configured
- [x] Network access configured
- [x] `.env` created
- [x] `.gitignore` configured
- [x] MongoDB Atlas connected successfully
- [x] Express server running
- [x] User schema created
- [x] User model created
- [x] POST `/api/users` created
- [x] POST request tested using Postman
- [x] User successfully stored in MongoDB
- [x] GET `/api/users` created
- [x] GET request tested using Postman
- [x] User documents successfully retrieved

---

# 🎉 Day 4 Completed Successfully!

Day 4 provided practical experience with:

**Express.js + Mongoose + MongoDB Atlas + REST APIs + Postman**

The project demonstrated the complete basic backend-to-database workflow:

```text
Client / Postman
       ↓
    Express
       ↓
    Mongoose
       ↓
 MongoDB Atlas
       ↓
Stored Documents
       ↓
    Mongoose
       ↓
    Express
       ↓
Client / Postman
```

This was an important step toward understanding how a full-stack application can store and retrieve real data using a database.