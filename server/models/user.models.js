const mongoose = require("mongoose")
import { isEmail } from "validator"

const userSchema = new mongoose.Schema({
	name: String,
	userName: String,
	email: {
		type: String,
		lowercase: true,
		unique: true,
		validate: [isEmail, "invalid email"],
	},
	passWord: String,
	googleId: String,
})

module.exports = new mongoose.model("User", userSchema)
