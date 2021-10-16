var express = require('express');
var router = express.Router();

// Create routes
router.get('/', function(req, res, next) {
    res.send('hello world');
});

router.post('/', function(req, res, next) {
    res.send('hello world');
});
module.exports = router;