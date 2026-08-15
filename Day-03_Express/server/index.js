const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/message", (req, res) => {
    const { message } = req.body;

    console.log("Received:", message);

    res.json({
        reply: `Server received your message: "${message}"`
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});