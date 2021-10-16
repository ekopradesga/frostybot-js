var express = require('express');
var router = express.Router();

function rawBody(req, res, next) {
    req.setEncoding('utf8');
    req.rawBody = '';
    req.on('data', function(chunk) {
        req.rawBody += chunk;
    });
    req.on('end', function(){
        next();
    });
}

router.use(rawBody);

// Create routes
router.get('/', function(req, res, next) {
    res.send('hello world');
});

router.post('/', function(req, res, next) {
    // res.send('hello world');
    res.send(req.rawBody);
});
module.exports = router;