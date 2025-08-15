// Needed Resources
const express = require("express");
const router = new express.Router();
const profileController = require("../controllers/profile-controller");

// Route to build main page
router.get("/", profileController.getProfilePage);

module.exports = router;