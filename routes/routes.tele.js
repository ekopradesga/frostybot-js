var express = require('express');
var router = express.Router();
var api = require('../core/core.tele')

// Create routes

router.get('/v1', async function(req, res, next) {
    res.send('hello world');
});

module.exports = router;