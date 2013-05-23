/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        paginator : {
            deps : [
                'jquery',
                'backbone'
            ],
            exports : 'Backbone.Paginator'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        text: '../bower_components/requirejs-text/text',
        paginator : '../bower_components/backbone.paginator/lib/backbone.paginator'
    }
});

require([
    'common',
    'routes/router',
    'backbone'
], function (Common, Router, Backbone) {
    Common.init({
        onload : function (settings) {
            console.log('customize onload');
            var router = new Router;
            router.on('route', Common.routes);
            Backbone.history.start();
        }
    });
});