const Biodata = require("../models/Biodata");

exports.createBiodata = async (req, res) => {
  const biodata = new Biodata({
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    dob: req.body.dob,
    gender: req.body.gender,
    address: req.body.address,
    image: req.file ? req.file.path : "",
  });

  await biodata.save();
  res.json({ message: "Biodata saved" });
};

exports.getBiodata = async (req, res) => {
  const data = await Biodata.find();
  res.json(data);
};
