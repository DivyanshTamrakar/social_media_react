const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const {
  getAllUser,
  getProfile,
  userSignup,
  findByEmail,
  updateProfile,
  follow,
  unfollow,
  following,
  unfollowing,
} = require("../controller/user.controller");

router.use(bodyparser.json({ limit: "50mb" }));

router.route("/all").get(getAllUser);

router.route("/profile/:_id").get(getProfile);

router.route("/signup").post(userSignup);

router.route("/:email").get(findByEmail);

router.route("/update/:_id").post(updateProfile);

router.route("/follow").post(follow);

router.route("/unfollow").post(unfollow);

router.route("/following").post(following);

router.route("/unfollowing").post(unfollowing);

module.exports = router;
