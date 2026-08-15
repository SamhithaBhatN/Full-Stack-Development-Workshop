# 📅 Day 3 – React + Express Notes

## 📌 Overview

Day 3 focused on connecting a **React frontend** with an **Express backend**.

I created a separate React client and Express server and connected them using an API.

The project is a simple **SamBake Message Center**.

---

# 1. React + Express

A full-stack application can have:

```text
Frontend
   ↓
React
```

and:

```text
Backend
   ↓
Express
```

The frontend communicates with the backend through an API.

In this project:

```text
React → Express → React
```

---

# 2. Project Structure

The Day 3 project contains two main parts:

```text
Day-03_Express/
│
├── client/
│   └── React application
│
├── server/
│   └── Express application
│
├── README.md
└── Notes.md
```

### Client

The `client` folder contains the React frontend created using Vite.

### Server

The `server` folder contains the Express backend.

---

# 3. Creating the React Client

The React client was created using Vite:

```bash
npm create vite@latest client -- --template react
```

The development server is started using:

```bash
npm run dev
```

The React application runs on:

```text
http://localhost:5173/
```

---

# 4. Creating the Express Server

The backend uses:

- Node.js
- Express.js
- CORS

The Express project contains:

```text
server/
├── index.js
├── package.json
└── package-lock.json
```

The server is started using:

```bash
node index.js
```

The Express server runs on:

```text
http://localhost:5000
```

---

# 5. Express

Express is a Node.js framework used to create web servers and APIs.

It allows us to:

- Create a server
- Create routes
- Handle HTTP requests
- Send responses
- Work with JSON data

Express was installed using npm.

---

# 6. CORS

CORS stands for:

```text
Cross-Origin Resource Sharing
```

It allows the React frontend and Express backend running on different origins to communicate.

CORS was enabled using:

```javascript
const cors = require("cors");

app.use(cors());
```

In this project:

```text
React → http://localhost:5173
Express → http://localhost:5000
```

Since they run on different ports, CORS is used to allow communication between them.

---

# 7. JSON Middleware

Express needs middleware to read JSON data sent by the frontend.

This was added using:

```javascript
app.use(express.json());
```

This allows Express to access JSON data from:

```javascript
req.body
```

---

# 8. API

An API provides a way for the frontend and backend to communicate.

The project contains this API endpoint:

```text
POST /api/message
```

The complete endpoint is:

```text
http://localhost:5000/api/message
```

---

# 9. POST Request

A `POST` request is used to send data to a server.

In this project, React sends a message to Express using a POST request.

Example:

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

---

# 10. Sending JSON Data

The message is converted into JSON using:

```javascript
JSON.stringify({
  message: message
})
```

Example data sent to the server:

```json
{
  "message": "Hello Server"
}
```

---

# 11. Receiving Data in Express

Express receives the JSON data through:

```javascript
req.body
```

The message can be extracted using:

```javascript
const { message } = req.body;
```

The server can then use the received message.

---

# 12. Sending a JSON Response

Express sends a response using:

```javascript
res.json({
  reply: `Server received your message: "${message}"`
});
```

Example response:

```json
{
  "reply": "Server received your message: \"Hello Server\""
}
```

---

# 13. React `fetch()`

The React frontend uses the JavaScript `fetch()` function to communicate with the backend.

The basic flow is:

```text
React
  ↓
fetch()
  ↓
POST request
  ↓
Express API
  ↓
JSON response
  ↓
React
```

---

# 14. Receiving the Response in React

The response from Express is converted into JSON:

```javascript
const data = await response.json();
```

The response can then be displayed in the React application.

For example:

```javascript
setReply(data.reply);
```

---

# 15. React State

The project uses `useState` to store the message and server response.

Example:

```javascript
const [message, setMessage] = useState("");
const [reply, setReply] = useState("");
```

### `message`

Stores the text entered by the user.

### `setMessage`

Updates the message.

### `reply`

Stores the response received from Express.

### `setReply`

Updates the server response displayed on the page.

---

# 16. Controlled Input

The message input is connected to React state.

Example:

```jsx
<input
  type="text"
  value={message}
  onChange={(event) => setMessage(event.target.value)}
/>
```

When the user types something, the React state is updated.

---

# 17. Sending the Message

The `Send` button calls the function that sends the request:

```jsx
<button onClick={sendMessage}>
  Send
</button>
```

The function:

```javascript
sendMessage()
```

sends the message from React to Express.

---

# 18. Complete Communication Flow

The complete Day 3 flow is:

```text
User enters message
        ↓
React stores message in state
        ↓
User clicks Send
        ↓
fetch() sends POST request
        ↓
Express receives request
        ↓
Express reads req.body
        ↓
Express creates JSON response
        ↓
React receives response
        ↓
React updates reply state
        ↓
Response appears on webpage
```

---

# 19. Example

### User Input

```text
Hello Server
```

### Request

```json
{
  "message": "Hello Server"
}
```

### Express Response

```json
{
  "reply": "Server received your message: \"Hello Server\""
}
```

### Displayed on React

```text
Server received your message: "Hello Server"
```

---

# 20. Running the Project

The frontend and backend need to run separately.

### React Client

Open a terminal inside:

```text
Day-03_Express/client
```

Run:

```bash
npm run dev
```

React runs on:

```text
http://localhost:5173/
```

### Express Server

Open another terminal inside:

```text
Day-03_Express/server
```

Run:

```bash
node index.js
```

Express runs on:

```text
http://localhost:5000
```

Both servers should remain running while testing the application.

---

# 21. Project – SamBake Message Center

The Day 3 application is a simple message center.

It contains:

- SamBake heading
- Message input
- Send button
- Server response section

The application demonstrates communication between React and Express.

---

# 22. What I Learned

Through Day 3, I learned:

- How to create a React frontend using Vite.
- How to create an Express backend.
- How frontend and backend applications can be separated.
- How to create an API endpoint.
- How to send a POST request.
- How to send JSON data.
- How Express reads `req.body`.
- How Express sends JSON responses.
- How React uses `fetch()` to communicate with an API.
- How CORS allows frontend-backend communication.
- How React state can store request and response data.

---

# 23. Key Terms

### Frontend

The part of the application that users interact with.

### Backend

The server-side part of the application that processes requests.

### API

A communication interface between applications.

### Express

A Node.js framework used to create servers and APIs.

### Request

Data sent from the frontend to the backend.

### Response

Data returned from the backend to the frontend.

### JSON

A common format used for exchanging data.

### CORS

A mechanism that allows resources from different origins to communicate.

### `fetch()`

A JavaScript function used to make HTTP requests.

### `req.body`

Contains data sent in the request body.

### `res.json()`

Sends a JSON response from the Express server.

---

# 24. Day 3 Status

- [x] React client created
- [x] Vite configured
- [x] Express server created
- [x] Express installed
- [x] CORS installed
- [x] JSON middleware configured
- [x] API endpoint created
- [x] POST request implemented
- [x] React connected to Express
- [x] JSON request implemented
- [x] JSON response implemented
- [x] React state used
- [x] Server response displayed
- [x] SamBake UI completed
- [x] Project tested successfully
- [x] README.md completed

## 🎉 Day 3 Completed!

Day 3 provided a practical introduction to **frontend-backend communication using React, Express, APIs, JSON, and HTTP requests**.