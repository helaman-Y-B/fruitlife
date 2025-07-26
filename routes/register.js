// Needed Resources
const express = require("express");
const router = new express.Router();
const registerController = require("../controllers/register-controller");

router.get("/", registerController.getregisterPage);

router.post("/", registerController.registerAccount);

module.exports = router;