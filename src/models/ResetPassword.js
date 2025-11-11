const mongoose = require("mongoose");

const resetPasswordSchema = new mongoose.Schema({
  code: {
    type: String,
  },
  phone: {
    type: String,
  },
  sessionId: {
    type: String,
  },
  verified_status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // <-- 300 seconds = 5 minutes
  },
});

const ResetPassword = mongoose.model("ResetPassword", resetPasswordSchema);

module.exports = ResetPassword;
