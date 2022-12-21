const cors = require("cors")

var corsOptions = {
	origin: "*",
	optionsSuccessStatus: 204,
}

module.exports = cors(corsOptions)
