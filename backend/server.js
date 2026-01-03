const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const biodataRoutes = require("./routes/biodataRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDB();

app.use("/api/biodata", biodataRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
