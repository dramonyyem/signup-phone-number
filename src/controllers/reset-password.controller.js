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
const postNewPassword = async (req, res) => {
  try {
    const { phone, password, verify_password } = await req.body;
    if (!(password === verify_password)) {
      throw new Error("please check password again");
    }

    const user = await User.findOne({
      phone: phone,
    });

    if (!user) {
      throw new Error("no phone number inside backend");
    }
    user.old_password = user.password;
    user.password = password;
    await user.save();

    return res.json("new passsword asign");
  } catch (error) {
    throw new Error("Server Error");
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
    throw new Error("Server error");
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

    checkIfVerified.verified_status = true;
    await checkIfVerified.save();

    return res.json(true);
  } catch (error) {
    throw new Error("Server Error");
  }
};

module.exports = {
  postNewPassword,
  postOtpSend,
  getPhoneNumber,
  postVerifyOtp,
};
