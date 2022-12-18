const cors = require('cors');


var corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 204 
  }

  module.exports = cors(corsOptions);
  