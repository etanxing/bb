var fs = require('fs'),
    path = require('../../config/config').config().root;

exports.all = function (req, res, next) {
    res.set({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    next();
}

exports.getall = function (req, res, next) {

    //Don't process requests for API endpoints
    if (req.url.indexOf('/api') == 0 ) return next();
    
    var init = "define(['app/app'], function(app) {  app.initialize(); });",
        template = '/public/index.html';

    if (req.url.indexOf('/db') == 0) template = '/public/templates/indexdb.html';

    fs.readFile(path + template, 'utf8', function(error, content) {
        if (error) console.log(error);
        content = content.replace("{{init}}", init);
        res.send(200, content);
    });
}

exports.optionsall = function(req, res, next) {
    res.send(200);
}

   