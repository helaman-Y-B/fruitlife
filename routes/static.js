const express = require("express");
const router = express.Router();

// Static Routes
router.use(express.static("public"));
router.use("/css", express.static(__dirname + "/css"));
router.use("/js", express.static(__dirname + "/js"));
router.use("/img", express.static(__dirname + "/img"));

module.exports = router;