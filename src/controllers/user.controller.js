const User = require("../models/User");

const postUser = async (req, res) => {
  try {
    const { phone, password } = await req.body;

    const user = new User({
      phone,
      password,
    });
    await user.save();

    return res.json("user addded !!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postUser,
};
