const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  const { username, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 12);
  try {
    const user = await User.create({ username, password: hashPassword });

    res.status(201).json({
      status: "Succeed",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

module.exports = {
  signUp,
};
