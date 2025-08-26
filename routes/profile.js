// Needed Resources
const express = require("express");
const router = new express.Router();
const profileController = require("../controllers/profile-controller");
const multer = require("multer");
const upload = multer({
    dest: "public/img/profile-pictures/",
})

// Route to build main page
router.get("/", profileController.getProfilePage);

router.post("/", upload.single("profilePicture"), profileController.profilePicture);

module.exports = router;