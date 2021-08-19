var express = require("express");
var router = express.Router();
var { Post } = require("../Modals/PostModel");
var bodyparser = require("body-parser");

router.use(bodyparser.json({ limit: "50mb" }));

router.route("/addpost").post(async (req, res) => {
  try {
    let { userid, post, caption, user_profile, username } = req.body;
    const data = new Post({ userid, post, caption, user_profile, username });
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
});
