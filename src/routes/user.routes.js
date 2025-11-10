const express = require("express");
const { postUser } = require("../controllers/user.controller");
const { postResetPassword } = require("../controllers/reset-password.controller");

const router = express.Router();

// ✅ always start with '/'
router.post("/user", postUser);
router.post("/user/forgot-password", postResetPassword);

module.exports = router;
