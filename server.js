// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Test route
app.get("/api/jobs", (req, res)  => {
     res.json([
    { id: 1, title: "Software Engineer", company: "Google", location: "Bangalore" },
    { id: 2, title: "Data Scientist", company: "Microsoft", location: "Hyderabad" },
    { id: 3, title: "Frontend Developer", company: "Amazon", location: "Remote" }
  ]);
  res.send("Job Finder Backend Running 🚀");
});

// Routes (we’ll add in next step)
const jobRoutes = require("./routes/jobRoutes");
app.use("/api/jobs", jobRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
