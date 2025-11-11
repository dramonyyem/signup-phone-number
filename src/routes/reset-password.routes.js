const express = require("express");
const { postOtpSend, postVerifyOtp, postNewPassword } = require("../controllers/reset-password.controller");
const router = express.Router();

// ✅ always start with '/'
router.post("/send-otp", postOtpSend);
router.post("/verified-otp", postVerifyOtp);
router.post('/new-password', postNewPassword);

module.exports = router;
