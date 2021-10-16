var express = require('express');
var router = express.Router();
var api = require('../core/core.tele')

// Create routes

var app = express();
app.get('/v1', function (req, res) {
    res.send('hello world');
});

module.exports = router;