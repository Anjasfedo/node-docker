const User = require("../models/userModel");

const signUp = async (req, res) => {
  try {
    const user = await User.create(req.body);

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
