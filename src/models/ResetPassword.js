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
});

const ResetPassword = mongoose.model("ResetPassword", resetPasswordSchema);

module.exports = ResetPassword;
