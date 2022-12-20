const mongoose = require("mongoose")

const mongoURL = `mongodb+srv://thepdevs:J9LNByQaM0S5hxHg@cluster0.yvoy0ok.mongodb.net/?retryWrites=true&w=majority`

exports.connect = () => {
	// Connecting to the database
	mongoose
		.connect(mongoURL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("Successfully connected to database")
		})
		.catch((error) => {
			console.log("database connection failed. exiting now...")
			console.error(error)
			process.exit(1)
		})
}
