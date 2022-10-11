const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const { initializeConnection } = require("./ConnectionDB/connectionDB");

const userApi = require("./routes/user.route");
const postApi = require("./routes/post.route");

app.use(cors());

// connect with mongodb via mongooose
initializeConnection();

// product from DB

app.use("/users", userApi);
app.use("/addpost", postApi);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World " });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server started at Port : ${PORT}`);
});
