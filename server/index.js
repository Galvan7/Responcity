const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { connectDB } = require("./databases/database");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const policeRoutes = require("./routes/policeRoutes");
dotenv.config();
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);

app.use("/api/police", policeRoutes);
app.use("/api/users", userRoutes);

// serving frontend
const path = require("path");
const buildPath = path.join(__dirname, "../crime/build");
app.use(express.static(buildPath));

app.get("*", function (req, res) {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(5000, () => {
  console.log("Backend Server is running on port 5000");
});
connectDB();
