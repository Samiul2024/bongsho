import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import personRoutes from "./routes/personRoutes.js";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

connectDB();

const app = express();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// ROUTES
app.use("/api/persons", personRoutes);

app.use("/api/auth", authRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("Bongsho API Running...");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});