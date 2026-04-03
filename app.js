
const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

const taskRoutes = require("./routes/taskRoutes");

app.use("/tasks", taskRoutes);
module.exports = app; 

const connectDB = require("./config/db");
connectDB();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});