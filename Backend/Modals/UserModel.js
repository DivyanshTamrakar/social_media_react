const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    photo_url: {
        type: String,
        trim: true,
        unique: false,
        default:"https://workhound.com/wp-content/uploads/2017/05/placeholder-profile-pic.png" 
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
      default: 11111111
    },
    username: {
        type: String,
    },
    bio: {
        type: String,default: 'Add Your Bio'

    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };
