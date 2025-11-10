const ResetPassword = require("../models/ResetPassword");
const User = require("../models/User");

const getPhoneNumber = async (req, res) => {
  try {
    const { phone } = await req.body;

    return res.json(phone);
  } catch (error) {
    throw new Error("please check password again");
  }
};
const postResetPassword = async (req, res) => {
  try {
    const { phone, password, verify_password } = await req.body;

    if (!(password === verify_password)) {
      throw new Error("please check password again");
    }

    const user = await User.findOne({
      phone: phone,
    });
  } catch (error) {
    throw new Error("please check password again");
  }
};

const postOtpSend = async (req, res) => {
  // mockup otp
  try {
    const { phone } = await req.body;
    const request = {
      code: "123456",
    };

    // generate sessionId

    const sessionId = "123456";

    const resetPassword = new ResetPassword({
      phone: phone,
      sessionId: sessionId,
      code: request.code,
    });

    await resetPassword.save();

    return res.json(sessionId);
  } catch (error) {
    throw new Error("please check password again");
  }
};

const postVerifyOtp = async (req, res) => {
  try {
    const { sessionId, phone, code } = req.body;

    const checkIfVerified = await ResetPassword.findOne({
      phone: phone,
      sessionId: sessionId,
      code: code,
    });

    if (!checkIfVerified) {
      throw new Error("Wrong OTP");
    }

    return res.json("allow access");
  } catch (error) {
    throw new Error("Wrong OTP");
  }
};
module.exports = {
  postResetPassword,
  postOtpSend,
  getPhoneNumber,
  postVerifyOtp,
};
