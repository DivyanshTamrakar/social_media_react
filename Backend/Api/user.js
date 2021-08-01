var express = require("express");
var router = express.Router();
var { User } = require("../Modals/UserModel");
var bodyparser = require("body-parser");
router.use(bodyparser.json());

router.route("/signup").post(async (req, res) => {
  try {
    let { name, email, password, mobile, username, bio } = req.body;
    const data = new User({ name, email, password, mobile, username, bio });
    const result = await data.save(); //
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
});

router.route("/:email").get(async (req, res) => {
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
      res.status(404).json({
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
});

router.route("/update/:_id").post(async (req, res) => {
  try {
    const userdata = req.body;
    const id = req.params;
    User.findByIdAndUpdate(id, userdata, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated User : ", docs);
      }
    });
    res.json({
      success: true,
      message: "Data Updated successfully ",
    });
  } catch (e) {
    res.json({
      success: false,
      message: "data updation fail",
      error: `${e}`,
    });
  }
});

module.exports = router;
