const express = require("express");
const { postUser } = require("../controllers/user.controller");
const { postNewPassword } = require("../controllers/reset-password.controller");

const router = express.Router();

// ✅ always start with '/'
router.post("/user", postUser);
router.post("/user/forgot-password", postNewPassword);

module.exports = router;
