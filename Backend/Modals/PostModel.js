const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
      default:
        "https://workhound.com/wp-content/uploads/2017/05/placeholder-profile-pic.png",
    },
    caption: {
      type: String,
      trim: true,
      required: true,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        text: String ,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    user_profile: {
      type: String,
      trim: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = { Post };
