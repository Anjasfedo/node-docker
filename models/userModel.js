const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    reqire: [true, "Must have username"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Must have password"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
