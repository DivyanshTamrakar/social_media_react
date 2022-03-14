const mongoose = require("mongoose");
const { Post } = require("../modals/post.modal");

const addPost = async (req, res) => {
  try {
    let { userid, post, caption, likes, user_profile, username } = req.body;
    const data = new Post({
      userid,
      post,
      caption,
      likes,
      user_profile,
      username,
    });
    const result = await data.save();
    res.status(200).json({
      success: true,
      message: "Posted successfully",
      post: result,
    });
  } catch (e) {
    res.json({
      success: false,
      message: "Something is wrong while creating user ",
      error: `${e}`,
    });
  }
};

const getAllPost = async (req, res) => {
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
};

const getIndividualPost = async (req, res) => {
  let userid = req.params;

  try {
    const posts = await Post.find(userid);
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
};

const likePost = async (req, res) => {
  let { postId, userid } = req.body;
  const id = mongoose.Types.ObjectId(userid);

  Post.findByIdAndUpdate(
    { _id: postId },
    { $push: { likes: id } },
    { new: true },
    function (err, docs) {
      if (err) {
        res.json({ success: false, error: err });
      } else {
        res.json({
          success: true,
          message: "Data Updated Successfully",
          result: docs,
        });
      }
    }
  );
};

const dislikePost = async (req, res) => {
  let { postId, userid } = req.body;
  const id = mongoose.Types.ObjectId(userid);

  Post.findByIdAndUpdate(
    { _id: postId },
    { $pull: { likes: id } },
    { new: true },
    function (err, docs) {
      if (err) {
        res.json({ success: false, error: err });
      } else {
        res.json({
          success: true,
          message: "userid successfully removed ",
          result: docs,
        });
      }
    }
  );
};

const commentPost = async (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.body.postedBy,
  };

  Post.findByIdAndUpdate(
    { _id: req.body.postid },
    { $push: { comments: comment } },
    { new: true }
  )
    .populate("comments.postedBy", "_id username")
    .populate("postedBy", "_id username")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ success: false, error: err });
      } else {
        res.json({
          success: true,
          message: "Data Updated Successfully",
          result: result,
        });
      }
    });
};

module.exports = {
  addPost,
  getAllPost,
  getIndividualPost,
  likePost,
  dislikePost,
  commentPost,
};
