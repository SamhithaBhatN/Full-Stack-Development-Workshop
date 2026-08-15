import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    if (message.trim() === "") {
      setReply("Please enter a message.");
      return;
    }

    const response = await fetch("http://localhost:5000/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });

    const data = await response.json();

    setReply(data.reply);
  };

  return (
    <div className="container">
      <h1>🍰 SamBake</h1>

      <p className="subtitle">React + Express Message Center</p>

      <label htmlFor="message">Send a message</label>

      <input
        type="text"
        id="message"
        placeholder="Enter your message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <button onClick={sendMessage}>Send</button>

      {reply && (
        <div className="response">
          <h2>Server Response</h2>
          <p>{reply}</p>
        </div>
      )}
    </div>
  );
}

export default App;