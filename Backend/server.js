const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Test Route */
app.get("/", (req, res) => {
  res.send("VBS Bank Backend Running");
});

/* 🔥 Import Routes */
const userRoutes = require("./routes/userRoutes");

/* 🔥 Use Routes */
app.use("/api/users", userRoutes);

/* MongoDB Connect */
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.log(err));

/* Server */
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});