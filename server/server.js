require("dotenv").config();
const PORT = process.env.PORT || 8000;

// connecting with database
require("./config/database").connect();

const express = require('express')
const app = express()
const cors = require("cors");

// Adding origin as * to be accessible by any port
const corsOptions = {
    origin: '*', 
    credentials: true,
    optionSuccessStatus: 200
}

// Middlewares
app.use(express.json())
app.use(cors(corsOptions))

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`)
    next()
})

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use('/api', require('./routes'))

// to check for sample backend request
app.listen(PORT || 5500, (err) => {
    if (err) console.log(err);
    else console.log(`Server running at PORT ${PORT}`);
});