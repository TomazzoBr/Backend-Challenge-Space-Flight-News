import mongoose from "mongoose";
import { config } from "dotenv";

config();
const uri = process.env.MONGO_URL;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", function () {
  console.error("db connection error");
});
db.once("open", function () {
  console.log("Connected to the database!");
});

export default db;
