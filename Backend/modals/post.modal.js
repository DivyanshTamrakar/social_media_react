const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
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
    posted_user_data: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        text: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = { Post };
