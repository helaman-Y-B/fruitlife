// Needed Resources
const express = require("express");
const router = new express.Router();
const profileController = require("../controllers/profile-controller");

// Multer setup for file uploads
const multer = require("multer");
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/profile-pictures');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, Date.now() + ext); // or use Date.now() + ext for unique names
  }
});

const upload = multer({ storage: storage });

// Route to build main page
router.get("/", profileController.getProfilePage);

router.post("/", upload.single("profilePicture"), profileController.profilePicture);

module.exports = router;