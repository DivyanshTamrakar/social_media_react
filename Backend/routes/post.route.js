const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const {
  addPost,
  getAllPost,
  getIndividualPost,
  likePost,
  dislikePost,
  commentPost,
} = require("../controller/post.controller");

router.use(bodyparser.json({ limit: "50mb" }));

router.route("/").post(addPost).get(getAllPost);

router.route("/:userid").get(getIndividualPost);

router.route("/like").post(likePost);

router.route("/dislike").post(dislikePost);

router.route("/comment").post(commentPost);

module.exports = router;
