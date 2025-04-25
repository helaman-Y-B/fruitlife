const express = require("express");
const router = express.Router();

// Static Routes
router.use(express.static("public"));
router.use("/css", express.static(__dirname + "/css"));
router.use("/js", express.static(__dirname + "/js"));
router.use("/images", express.static(__dirname + "/images"));

module.exports = router;