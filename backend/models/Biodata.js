const mongoose = require("mongoose");

const biodataSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  dob: String,
  gender: String,
  address: String,
  image: String,
});

module.exports = mongoose.model("Biodata", biodataSchema);
