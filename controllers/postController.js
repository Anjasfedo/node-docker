const Post = require("../models/postModel");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      status: "Succeed",
      data: {
        posts,
      },
      result: posts.length,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json({
      status: "Succeed",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(200).json({
      status: "Succeed",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "Succeed",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Succeed",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
