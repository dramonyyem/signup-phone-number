const express = require("express");
const { postAuth } = require("../controllers/auth.controller");

const router = express.Router();

// ✅ always start with '/'
router.post("/signup", postAuth);

module.exports = router;
