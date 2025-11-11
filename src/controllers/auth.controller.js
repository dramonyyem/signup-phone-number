const User = require("../models/User");

const postAuth = async(req, res) => {
  try {
    const { phone, password } = req.body;

    const user = new User({
      phone,
      password,
      old_password:password
    });

    await user.save();

    return res.json("user addded !!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postAuth,
};
