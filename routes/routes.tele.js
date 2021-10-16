var express = require('express');
var router = express.Router();

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('765810037:AAEWqncmLEjYjjHZbhZ-s0wsN15lmTcdj2E');

// Create routes
router.get('/', function(req, res, next) {
    res.send('hello world');
});

router.post('/v3', function(req, res, next) {
    // res.send('hello world');
    // res.send(req.rawBody);
    bot.sendMessage(-1001465663561, req.rawBody);
    res.sendStatus(200);
});
module.exports = router;