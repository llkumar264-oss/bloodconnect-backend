const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/requests", require("./routes/requestRoutes"));
app.use("/api/volunteers", require("./routes/volunteerRoutes"));
app.use("/api/donors", require("./routes/donorRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

// Default route → open login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
