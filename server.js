process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./server/config/express'),
    mongoose = require('./server/config/mongoose'),
    db = mongoose(),
    app = express()
    ;

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000');