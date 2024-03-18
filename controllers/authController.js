const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 12);

    const user = await User.create({ username, password: hashPassword });

    req.session.user = user;

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

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    const isCorrect = await bcrypt.compare(password, user.password);

    if (isCorrect) {
      req.session.user = user;

      res.status(200).json({
        status: "Succeed",
      });
    } else {
      res.status(400).json({
        status: "Failed",
        message: "Incorrect Password",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

module.exports = {
  signUp,
  login,
};
