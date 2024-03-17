const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    reqire: [true, "Must have title"],
  },
  body: {
    type: String,
    require: [true, "Must have body"],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
