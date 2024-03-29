const mongoose = require("mongoose");
const { User } = require("../modals/user.modal");
const bcrypt = require("bcrypt");

const getAllUser = async (req, res) => {
  let name = req.query.name;
  const regex = new RegExp(name, "i");

  try {
    if (name === undefined) {
      const allUsers = await User.find({});
      if (allUsers) {
        return res.json({
          success: true,
          message: "all user fetched successfull",
          users: allUsers,
        });
      }
    } else {
      const singleUsers = await User.find({ name: { $regex: regex } });
      return res.json({
        success: true,
        message: "all user fetched successfull",
        users: singleUsers,
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

const getProfile = async (req, res) => {
  const id = req.params;
  try {
    const user = await User.findOne(id);
    if (user) {
      res.json({
        success: true,
        message: "User Found",
        user: user,
      });
    } else {
      res.json({
        success: false,
        message: "User Not Found",
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

const userSignup = async (req, res) => {
  try {
    let { name, email, password, mobile, username, bio } = req.body;
    const resultedUser = await User.findOne({ email });

    if (resultedUser) {
      return res
        .status(422)
        .json({ success: false, message: "User already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const data = new User({
      name,
      email,
      password: hashedPassword,
      mobile,
      username,
      bio,
    });
    const result = await data.save();
    res.status(200).json({
      success: true,
      message: "You have registered successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: "Something is wrong while creating user ",
      error: `${e}`,
    });
  }
};

const findByEmail = async (req, res) => {
  const email = req.params;

  try {
    const user = await User.findOne(email);
    if (user) {
      res.json({
        success: true,
        message: "User Found",
        user: user,
      });
    } else {
      res.json({
        success: false,
        message: "User Not Found",
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

const updateProfile = async (req, res) => {
  try {
    const userdata = req.body;
    const id = req.params;
    User.findByIdAndUpdate(id, userdata, { new: true }, function (err, docs) {
      if (err) {
        return res.status(404).json({
          success: false,
          message: err,
        });
      } else {
        res.json({
          success: true,
          message: "Data Updated successfully ",
          user: docs,
        });
      }
    });
  } catch (e) {
    res.json({
      success: false,
      message: "data updation fail",
      error: `${e}`,
    });
  }
};

const follow = async (req, res) => {
  let { followerid, followingid } = req.body;
  const id = mongoose.Types.ObjectId(followingid);

  User.findByIdAndUpdate(
    { _id: followerid },
    { $push: { followers: id } },
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

const unfollow = async (req, res) => {
  let { followerid, followingid } = req.body;
  const id = mongoose.Types.ObjectId(followingid);

  await User.findByIdAndUpdate(
    { _id: followerid },
    { $pull: { followers: id } },
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

const following = async (req, res) => {
  let { followerid, followingid } = req.body;
  const id = mongoose.Types.ObjectId(followerid);

  User.findByIdAndUpdate(
    { _id: followingid },
    { $push: { following: id } },
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

const unfollowing = async (req, res) => {
  let { followerid, followingid } = req.body;
  const id = mongoose.Types.ObjectId(followerid);

  User.findByIdAndUpdate(
    { _id: followingid },
    { $pull: { following: id } },
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

module.exports = {
  getAllUser,
  getProfile,
  userSignup,
  findByEmail,
  updateProfile,
  follow,
  unfollow,
  following,
  unfollowing,
};
