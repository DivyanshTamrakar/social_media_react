var mongoose = require("mongoose");

function initializeConnection() {
  const url =
    "mongodb+srv://divyansh:developer@neog-cluster.j0bu3.mongodb.net/social-media";
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("successfully connected"))
    .catch((error) => console.error("mongoose connection failed", error));
}

module.exports = { initializeConnection };
