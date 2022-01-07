const mongoose = require("mongoose");
const uri = process.env.MONGO_URL;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", function () {
  console.error(">>>> db connection error");
});
db.once("open", function () {
  console.log(">>>> we are connected to the database!");
});

module.exports = db;
