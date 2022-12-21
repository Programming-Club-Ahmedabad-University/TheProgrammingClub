// Description: This file contains the logic for the authentication of the user
const User = require("../models/user.models.js")

// for token generation
const jwt = require("jsonwebtoken")

// for password encryption
const bcrypt = require("bcryptjs")

// reading the content of the private key
const fs = require("fs")
pathToKey = require("path").join(__dirname, "..", "./config/id_rsa_priv.pem")
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8") //private key is used for signing the token

/*
    This function is used to authenticate the user when he/she tries to login
    A post request is made to the server with the user's email and password
    The server then checks if the user exists in the database and if the password is correct
    If the user exists and the password is correct, a token is generated and sent back to the client
*/
const signin = async (req, res, next) => {
	// Our login logic starts here
	try {
		// Get user input
		const password = req.body.password
		let email = req.body.email

		//For consistency the email was turned into lowercase during signup
		email = email.toLowerCase()
		// Validate user input
		if (!(email && password)) {
			res.status(400).send("All input is required")
		}
		// Validate if user exist in our database
		const user = await User.findOne({ email })

		// to decrypt the password and generate a new token
		if (user && (await bcrypt.compare(password, user.password))) {
			const payload = {
				user: user,
				iat: Date.now(),
			}
			// Create token
			const token =
				"Bearer " +
				jwt.sign(payload, PRIV_KEY, {
					expiresIn: "1d",
					algorithm: "RS256",
				})
			// send user
			res.status(200).json({ token, user })
		} else {
			res.status(400).send("Invalid Credentials")
		}
	} catch (err) {
		console.log(err)
	}
	// Our register logic ends here
	next()
}

/*
    This function is used to create a new user when he/she tries to signup
    A post request is made to the server with the user's email and password
    The server then checks if the user already exists in the database
    If the user does not exist, the password is encrypted and the user is created
    A token is generated and sent back to the client
*/
const signup = async (req, res, next) => {
	// Create signin function
	try {
		// Get user input
		const password = req.body.password
		let email = req.body.email

		if (!(email && password)) {
			res.status(400).send("All input is required")
		}

		//For consistency the email was turned into lowercase during signup
		email = email.toLowerCase()

		// check if user already exist
		// Validate if user exist in our database
		const oldUser = await User.findOne({ email })

		if (oldUser) {
			return res.status(409).send("User Already Exist. Please Signin")
		}

		//Encrypt user password
		encryptedPassword = await bcrypt.hash(password, 10)

		const user = await User.create({
			email: email.toLowerCase(), // sanitize: convert email to lowercase
			password: encryptedPassword,
		})

		const payload = {
			user: user,
			iat: Date.now(),
		}
		// Create token
		const token =
			"Bearer " +
			jwt.sign(payload, PRIV_KEY, { expiresIn: "1d", algorithm: "RS256" })
		// return new user
		res.status(201).json({ token, user })
	} catch (err) {
		console.log(err)
	}
	// Our register logic ends here
	next()
}

//export the functions
module.exports = { signin, signup }
