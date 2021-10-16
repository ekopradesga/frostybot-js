var express = require('express');
var router = express.Router();
var api = require('../core/core.tele')

// Create routes

Object.keys(api).forEach(baseapi => {
    var routes = api[baseapi];
    
    var routes = api[baseapi];

    for (var [routeinfo, command] of Object.entries(routes)) {

        var [method, route] = routeinfo.split('|')

        //route = baseapi + route
        
        router[method](route, async function(req, res, next) {
            
        })
    }
});
module.exports = router;