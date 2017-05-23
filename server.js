// Node.js Server Packages

// Load in express
var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000; 

// Don't allow https
app.use(function (req, res, next) {
    if(req.header['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else{
        next();
    }
});

// Use this
app.use(express.static('public'));

// Start our web server up
app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT)
});

