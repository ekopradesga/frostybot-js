// API Routes

module.exports = {
    '/v1' : {
        'get|/'                            :   'this:execute',     // Catch-all router for /frostybot Webhook
        'post|/'                            :   'this:execute',     // Catch-all router for /frostybot Webhook
    },
}