const mongoose = require("mongoose");
import { isEmail } from 'validator';

const userSchema = new mongoose.Schema({
  userName: String,
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [ isEmail, 'invalid email']
  },
  passWord: String,
  googleId: String,
  hash: String,
});

module.exports = new mongoose.model("User", userSchema);
