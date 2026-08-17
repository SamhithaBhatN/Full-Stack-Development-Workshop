require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const { MongoClient, ObjectId, ServerApiVersion } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

let users;

async function connectDB() {
    try {
        await client.connect();

        const db = client.db("Day05FullStack");
        users = db.collection("users");

        await db.command({ ping: 1 });

        console.log("MongoDB Connected Successfully");
        console.log("Database: Day05FullStack");
        console.log("Collection: users");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
}

connectDB();

app.post("/users", async (req, res) => {
    try {
        const user = req.body;

        const result = await users.insertOne(user);

        res.status(201).json({
            message: "User added successfully",
            insertedId: result.insertedId
        });
    } catch (error) {
        console.error("Insert Error:", error);

        res.status(500).json({
            error: "Failed to add user"
        });
    }
});

app.get("/users", async (req, res) => {
    try {
        const data = await users.find().toArray();

        res.json(data);
    } catch (error) {
        console.error("Fetch Error:", error);

        res.status(500).json({
            error: "Failed to fetch users"
        });
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);

        const user = await users.findOne({
            _id: userId
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(user);
    } catch (error) {
        console.error("Fetch User Error:", error);

        res.status(500).json({
            error: "Failed to fetch user"
        });
    }
});

app.put("/users/:id", async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);

        const result = await users.updateOne(
            { _id: userId },
            { $set: req.body }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User updated successfully",
            result
        });

    } catch (error) {
        console.error("Update Error:", error);

        res.status(500).json({
            error: "Failed to update user"
        });
    }
});

app.delete("/users/:id", async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);

        const result = await users.deleteOne({
            _id: userId
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User deleted successfully",
            result
        });

    } catch (error) {
        console.error("Delete Error:", error);

        res.status(500).json({
            error: "Failed to delete user"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});