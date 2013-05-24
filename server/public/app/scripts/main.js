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
    'backbone'
], function (Backbone) {
    Backbone.history.start({pushState: true});
    console.log('arrived.');
});