const express = require("express");
const upload = require("../config/multer");
const { createBiodata,getBiodata,} = require("../controllers/biodataController");

const router = express.Router();


router.post("/", upload.single("image"), createBiodata);  
router.get("/", getBiodata);

module.exports = router;
