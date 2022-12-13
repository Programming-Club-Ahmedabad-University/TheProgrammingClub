const express = require('express');


const app = express();
const port = 4000;
const routes = require('./routes/index.js');

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
    next();
});

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(routes);






app.listen(port, () => console.log(`Listening on port ${port}`));