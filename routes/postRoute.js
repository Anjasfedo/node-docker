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

router.route("/").get(getPosts).post(protect, createPost);
router.route("/:id").get(getPost).put(protect, updatePost).delete(protect, deletePost);

module.exports = router;
