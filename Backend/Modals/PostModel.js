const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: false,
    },
    post: {
      type: String,
      default:
        "https://workhound.com/wp-content/uploads/2017/05/placeholder-profile-pic.png",
    },
    caption: {
      type: String,
      trim: true,
      required: true,
    },
    user_profile: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = { Post };
