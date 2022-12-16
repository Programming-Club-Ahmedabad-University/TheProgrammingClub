const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  contact:String,
  passOutYear:String,
  program:String,
  major:String,
});

module.exports = new mongoose.model("User", userSchema);
