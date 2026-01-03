const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/biodataDB")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
