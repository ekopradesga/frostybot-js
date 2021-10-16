var express = require('express');
var router = express.Router();

// Create routes
router.get('/v1', function(req, res, next) {
    res.send('hello world');
});

module.exports = router;