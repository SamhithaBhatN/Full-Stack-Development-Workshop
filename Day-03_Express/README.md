# 📅 Day 3 – React + Express

## 📌 Overview

This project is part of my **Full Stack Development Workshop** learning journey.

Day 3 focused on connecting a **React frontend** with an **Express backend** using an API.

For this project, I created a simple **SamBake Message Center** where a user can enter a message in the React application. The message is sent to the Express server using a `POST` request, and the server sends a response back to React.

This project helped me understand the basic communication between a frontend and a backend.

---

## 🎯 Learning Objectives

- Understand the role of a backend server.
- Learn the basics of Express.js.
- Create an Express server using Node.js.
- Create an API endpoint.
- Understand POST requests.
- Send data from React to Express.
- Receive data from Express in React.
- Understand JSON request and response data.
- Use `fetch()` to communicate with an API.
- Use CORS for frontend-backend communication.
- Build a simple React + Express application.

---

## 🛠️ Technologies Used

### Frontend

- React
- Vite
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js
- CORS

### Tools

- Visual Studio Code
- npm
- Git
- GitHub

---

## 📂 Project Structure

```text
Day-03_Express/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── server/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── Notes.md
└── README.md
```

---

## 🍰 Project – SamBake Message Center

The Day 3 project is a simple message application inspired by my **SamBake** bakery project.

The application contains:

- SamBake heading
- Message input field
- Send button
- Server response section

The user enters a message and clicks the **Send** button.

The React frontend sends the message to the Express backend.

The Express backend receives the message and sends a response back to the frontend.

---

## 🔄 Application Flow

```text
                React Frontend
                     │
                     │
                     │ User enters message
                     │
                     ▼
                 Send Button
                     │
                     │ POST Request
                     ▼
              Express Backend
                     │
                     │ Receives message
                     │
                     ▼
              Processes Request
                     │
                     │ JSON Response
                     ▼
                React Frontend
                     │
                     ▼
              Displays Response
```

---

## 🔌 API Endpoint

The Express backend contains the following API endpoint:

```text
POST /api/message
```

The complete backend address is:

```text
http://localhost:5000/api/message
```

---

## 📤 Request

React sends the message to Express as JSON.

Example:

```json
{
  "message": "Hello from SamBake!"
}
```

---

## 📥 Response

The Express server sends a JSON response.

Example:

```json
{
  "reply": "Server received your message: \"Hello from SamBake!\""
}
```

The React application then displays the reply on the webpage.

---

## 🖥️ Frontend

The React frontend uses the `fetch()` function to communicate with the Express backend.

The request uses:

```javascript
fetch("http://localhost:5000/api/message", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: message
  })
});
```

The response from the server is converted from JSON and displayed in the React application.

---

## ⚙️ Backend

The Express server is created using:

```javascript
const express = require("express");
```

CORS is enabled using:

```javascript
const cors = require("cors");
```

JSON request data is enabled using:

```javascript
app.use(express.json());
```

The API endpoint is created using:

```javascript
app.post("/api/message", (req, res) => {
  const { message } = req.body;

  console.log("Received:", message);

  res.json({
    reply: `Server received your message: "${message}"`
  });
});
```

The server runs on port `5000`.

---

## 🌐 Running the Project

The React frontend and Express backend run separately.

### 1. Start the React Client

Open a terminal inside:

```text
Day-03_Express/client
```

Run:

```bash
npm run dev
```

The React application runs on:

```text
http://localhost:5173/
```

### 2. Start the Express Server

Open another terminal inside:

```text
Day-03_Express/server
```

Run:

```bash
node index.js
```

The Express server runs on:

```text
http://localhost:5000
```

Both terminals must remain running while testing the application.

---

## 🧪 Example

### User Input

```text
Hello Server
```

### Server Response

```text
Server received your message: "Hello Server"
```

---

## 📸 Project Preview

### SamBake Message Center

The project was tested successfully with the React frontend communicating with the Express backend and displaying the server response.

---

## 📚 Concepts Covered

### React

- React components
- JSX
- `useState`
- Event handling
- Controlled input
- `fetch()`

### Express

- Express server
- Routes
- POST requests
- Request body
- JSON responses
- Middleware

### Frontend–Backend Communication

- API
- HTTP request
- HTTP response
- JSON
- CORS
- React-to-Express communication

---

## 🧠 What I Learned

Through Day 3, I learned that a web application can be divided into two major parts:

```text
Frontend
    ↓
React
```

and

```text
Backend
    ↓
Express
```

The frontend communicates with the backend through an API.

I learned how React can send data to an Express server and receive a response from it.

I also learned how JSON can be used to exchange data between the frontend and backend.

---

## 🔑 Key Takeaways

### React

Used to build the frontend user interface.

### Express

Used to create the backend server and API.

### API

Provides a communication point between the frontend and backend.

### Request

Data sent from the frontend to the backend.

### Response

Data returned from the backend to the frontend.

### JSON

A common format used for exchanging data between frontend and backend.

### CORS

Allows the React frontend and Express backend running on different origins to communicate.

### `fetch()`

JavaScript function used to make HTTP requests from the React application.

---

## 🚀 Improvements Made

Compared with the basic workshop example:

- Created a separate React client.
- Created a separate Express server.
- Organized frontend and backend into separate folders.
- Added a SamBake-themed interface.
- Added a server response section.
- Connected React to Express using `fetch()`.
- Tested the complete frontend-backend communication.

---

## 🎓 Learning Outcome

After completing Day 3, I can:

- Create a React frontend using Vite.
- Create an Express backend.
- Create a basic API endpoint.
- Send POST requests from React.
- Send JSON data to an Express server.
- Receive JSON responses.
- Display backend data in React.
- Understand basic frontend-backend communication.

---

## ✅ Day 3 Status

- [x] React client created
- [x] Vite development server configured
- [x] Express server created
- [x] Express installed
- [x] CORS installed
- [x] JSON middleware configured
- [x] POST API endpoint created
- [x] React connected to Express
- [x] Message sent from React
- [x] Response received from Express
- [x] Server response displayed in React
- [x] SamBake UI created
- [x] Project tested successfully
- [x] Project screenshot captured

### 🎉 Day 3 Completed Successfully!

This project provided a practical introduction to **frontend-backend communication using React and Express**.