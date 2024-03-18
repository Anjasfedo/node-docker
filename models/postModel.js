const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Must have title"],
  },
  body: {
    type: String,
    required: [true, "Must have body"],
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
