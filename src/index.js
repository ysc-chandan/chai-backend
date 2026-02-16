import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

// Load environment variables from .env file
dotenv.config({ path: ".env" });

// Create Express app
const app = express();

// Connect to MongoDB, then start server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });
