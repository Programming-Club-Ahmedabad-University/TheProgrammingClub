const jwt = require("jsonwebtoken");

// reading the content of the private key
const fs = require("fs");
pathToKey = require("path").join(__dirname, "..", "./config/id_rsa_priv.pem");
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8"); //private key is used for signing the token

const tokenCheck = (req, res, next) => {
    // Get the token from the header if present
    let getToken =
        req.body.token ||
        req.query.token ||
        req.headers["authorization"] ||
        req.headers["x-access-token"];

    // If token is not present
    if (!getToken) {
        return res.status(403).send("A token is required for authentication");
    }

    const token = getToken.split(" ")[1]; //removing the Bearer from the token

    // Verify the token
    jwt.verify(token, PRIV_KEY, { algorithms: ["RS256"] }, (err, user) => {
        // If token is not valid
        if (err) {
            return res.status(401).send(err);
        } else {
            // If token is valid
            console.log("Token verified");
            // Save the user in the request object
            req.user = user;
        }
    });
    next(); //calling next() to move to the next middleware
};

module.exports = tokenCheck;
