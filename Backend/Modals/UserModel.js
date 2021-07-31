const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    url: {
        type: String,
        trim: true,
        unique: false,
      },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 4,
    },
    mobile: {
      type: Number,
      trim: true,
    },
    username: {
        type: String,
    },
    bio: {
        type: String,

    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };
