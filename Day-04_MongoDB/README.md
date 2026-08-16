# 📅 Day 4 – MongoDB

## 📌 Overview

Day 4 of the Full Stack Development Workshop focused on connecting an Express.js backend with MongoDB.

For this project, I created a Node.js and Express backend, connected it to MongoDB Atlas using Mongoose, created a User schema and model, and tested REST API endpoints using Postman.

The project demonstrates the basic flow of sending data through an API, storing it in MongoDB, and retrieving it again.

---

## 🎯 Learning Objectives

- Understand MongoDB and NoSQL databases.
- Understand MongoDB Atlas.
- Connect Node.js and Express with MongoDB.
- Learn the purpose of Mongoose.
- Create a Mongoose schema and model.
- Store documents in MongoDB.
- Retrieve documents from MongoDB.
- Create GET and POST API endpoints.
- Test APIs using Postman.
- Use environment variables with `.env`.
- Protect sensitive information using `.gitignore`.

---

## 🛠️ Technologies Used

### Backend

- Node.js
- Express.js
- MongoDB
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

### Tools

- Visual Studio Code
- npm
- Postman
- MongoDB Compass
- Git
- GitHub

---

## 📂 Project Structure

```text
Day-04_MongoDB/
│
├── server/
│   ├── models/
│   │   └── User.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── Notes.md
└── README.md
```

> The `.env` file contains sensitive MongoDB credentials and must not be committed to GitHub.

---

## 🍃 What is MongoDB?

MongoDB is a NoSQL database that stores data in a document-oriented format.

Instead of storing data in traditional rows and tables, MongoDB stores data as documents inside collections.

Example document:

```json
{
  "name": "Samhitha Bhat",
  "email": "samhitha@example.com",
  "course": "MCA"
}
```

---

## 🗂️ MongoDB Structure

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

A document contains individual pieces of data.

---

## ☁️ MongoDB Atlas

For this project, MongoDB Atlas was used instead of running MongoDB locally.

MongoDB Atlas provides a cloud-hosted MongoDB database.

The application connects to the Atlas cluster using a MongoDB connection string.

A MongoDB Atlas connection string generally starts with:

```text
mongodb+srv://
```

---

## 🖥️ MongoDB Compass

MongoDB Compass is a graphical interface for working with MongoDB databases.

It can be used to:

- View databases.
- View collections.
- View documents.
- Inspect stored data.
- Work with MongoDB visually.

The database for this project was hosted on MongoDB Atlas.

---

## 📦 Initializing the Node.js Project

Inside the `server` folder, the Node.js project was initialized using:

```bash
npm init -y
```

This created the `package.json` file.

---

## 📥 Installing Dependencies

The required backend packages were installed using:

```bash
npm install express mongoose cors
```

dotenv was also installed to manage environment variables:

```bash
npm install dotenv
```

---

## 📚 Packages Used

### Express

Express is used to create the backend server and API routes.

```javascript
const express = require("express");
```

### Mongoose

Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

It helps with:

- Defining schemas.
- Creating models.
- Creating documents.
- Saving documents.
- Retrieving documents.

```javascript
const mongoose = require("mongoose");
```

### CORS

CORS allows communication between different origins.

```javascript
const cors = require("cors");
```

### dotenv

dotenv loads environment variables from the `.env` file.

```javascript
require("dotenv").config();
```

---

## 🔐 Environment Variables

The MongoDB connection string contains sensitive information.

Instead of writing the connection string directly inside the source code, it was stored in a `.env` file.

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

### Important

Never upload the real MongoDB username, password, or connection string to GitHub.

---

## 🚫 .gitignore

The `.gitignore` file contains:

```gitignore
node_modules/
.env
```

This prevents:

- `node_modules`
- `.env`

from being committed to Git.

---

## ⚙️ Express Server Setup

The Express application is created using:

```javascript
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
```

Middleware:

```javascript
app.use(cors());
app.use(express.json());
```

`express.json()` allows Express to read JSON request bodies.

---

## 🍃 Connecting to MongoDB Atlas

Mongoose connects the Express application to MongoDB Atlas.

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

After the Atlas connection was configured correctly, the terminal displayed:

```text
MongoDB connected successfully!
Server running on http://localhost:5000
```

---

## ⚠️ Local MongoDB Connection Error

Initially, the application attempted to connect to a local MongoDB server.

The following error appeared:

```text
MongoDB connection failed: connect ECONNREFUSED 127.0.0.1:27017
```

This occurred because a local MongoDB server was not running.

The project was then configured to use MongoDB Atlas.

After configuring the Atlas connection string, the connection succeeded.

---

## 🧱 Mongoose Schema

A Mongoose schema defines the structure of documents.

For this project, a `User` schema was created with:

- name
- email
- course

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

## 📦 Mongoose Model

The schema is converted into a model:

```javascript
const User = mongoose.model("User", userSchema);
```

The model can then be imported into `index.js`:

```javascript
const User = require("./models/User");
```

The model provides methods for creating and retrieving documents.

---

## 👤 User Document

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

## 🔑 MongoDB `_id`

MongoDB automatically creates a unique `_id` for every document.

Example:

```text
"_id": "6a816339c46e04c97d952ae5"
```

The `_id` uniquely identifies the document.

---

## 🔢 Mongoose `__v`

Mongoose adds a `__v` field to documents by default.

Example:

```json
"__v": 0
```

It is used by Mongoose for document versioning.

---

## 📤 POST API

The project contains a POST endpoint:

```text
POST /api/users
```

Complete URL:

```text
http://localhost:5000/api/users
```

The endpoint creates a new user and stores the document in MongoDB.

---

## 🧩 POST Route

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

## 🧪 Testing POST Using Postman

The POST API was tested using Postman.

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

Example JSON:

```json
{
  "name": "Samhitha Bhat",
  "email": "samhitha@example.com",
  "course": "MCA"
}
```

---

## 📥 POST Response

The request successfully returned:

```text
201 Created
```

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

`201 Created` indicates that a new resource was successfully created.

---

## 📥 GET API

A GET endpoint was created to retrieve users from MongoDB.

```text
GET /api/users
```

Complete URL:

```text
http://localhost:5000/api/users
```

---

## 🔎 GET Route

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

## 🧪 Testing GET Using Postman

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

## 📋 GET Response

The GET request successfully returned the users stored in MongoDB.

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

Multiple documents were present because the POST request was executed multiple times during testing.

---

## 🔌 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check the server |
| POST | `/api/users` | Create a user |
| GET | `/api/users` | Retrieve all users |

---

## 🔄 Complete Application Flow

### Creating a User

```text
Postman
   │
   │ POST /api/users
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

### Retrieving Users

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

## 🧰 Running the Project

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

## 🧠 Important Mongoose Methods

### `mongoose.connect()`

Connects the application to MongoDB.

```javascript
mongoose.connect(MONGO_URI);
```

### `new User()`

Creates a new document using the User model.

```javascript
const newUser = new User({
  name,
  email,
  course
});
```

### `.save()`

Saves a document to MongoDB.

```javascript
await newUser.save();
```

### `.find()`

Retrieves documents from MongoDB.

```javascript
const users = await User.find();
```

---

## 📚 Concepts Covered

### MongoDB

A NoSQL document database.

### MongoDB Atlas

A cloud-hosted MongoDB service.

### Collection

A group of MongoDB documents.

### Document

An individual MongoDB data record.

### Mongoose

An ODM library used to work with MongoDB from Node.js.

### Schema

Defines the structure of documents.

### Model

Provides methods for interacting with a MongoDB collection.

### REST API

Provides a way for applications to communicate with the backend.

### Postman

Used to test API requests and responses.

### `.env`

Stores environment variables and sensitive configuration.

### `.gitignore`

Prevents sensitive or unnecessary files from being committed.

---

## 🧠 What I Learned

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
- Understand backend-to-database communication.

---

## 🔑 Key Takeaways

- MongoDB stores data as documents.
- MongoDB Atlas provides cloud-hosted MongoDB databases.
- Mongoose provides a structured way to work with MongoDB in Node.js.
- A schema defines the structure of documents.
- A model provides methods for working with documents.
- POST is used to create a resource.
- GET is used to retrieve resources.
- Postman can be used to test APIs.
- `.env` should be used for sensitive configuration.
- `.env` should never be committed to GitHub.

---

## 📸 Project Preview

The Day 4 project was tested successfully using Postman.

The backend successfully:

1. Connected to MongoDB Atlas.
2. Created users through the POST API.
3. Stored users in MongoDB.
4. Retrieved users through the GET API.

---

## ✅ Day 4 Status

- [x] Day 4 folder created
- [x] Node.js project initialized
- [x] Express installed
- [x] Mongoose installed
- [x] CORS installed
- [x] dotenv installed
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
- [x] POST request tested in Postman
- [x] User successfully stored in MongoDB
- [x] GET `/api/users` created
- [x] GET request tested in Postman
- [x] User documents successfully retrieved

### 🎉 Day 4 Completed Successfully!

Day 4 provided practical experience with:

**Express + Mongoose + MongoDB Atlas + REST APIs + Postman**

The project demonstrated the basic flow of sending data through an API, storing it in MongoDB, and retrieving it again.