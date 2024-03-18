const express = require("express");
const protect = require("../middlewares/authMiddleware")

const {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

router.route("/").get(protect, getPosts).post(protect, createPost);
router.route("/:id").get(protect, getPost).put(protect, updatePost).delete(protect, deletePost);

module.exports = router;
