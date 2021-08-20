var express = require("express");
var router = express.Router();
var { Post } = require("../Modals/PostModel");
var bodyparser = require("body-parser");

router.use(bodyparser.json({ limit: "50mb" }));

router.route("/").
post(async (req, res) => {
  try {
    let { userid, post, caption, likes, user_profile, username } = req.body;
    const data = new Post({ userid, post, caption, likes, user_profile, username });
    const result = await data.save();
    res.status(200).json({
      success: true,
      message: "Posted successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: "Something is wrong while creating user ",
      error: `${e}`,
    });
  }
}).get(async (req, res) => {
  try {
    const posts = await Post.find({});
    if (posts) {
      res.json({
        success: true,
        message: "Posts Found",
        posts: posts,
      });
    } else {
      res.json({
        success: false,
        message: "No Posts Found",
      });
    }
  } catch (error) {
    if (error) {
      res.status(404).json({
        message: "Something went wrong with server",
        error: `${error}`,
      });
    }
  }
});

module.exports = router;