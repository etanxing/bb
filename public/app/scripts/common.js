/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
], function ($, _, Backbone) {
    'use strict';

    var app = (function () {
        var _router = '',
        	_status = new Backbone.Model({
        		isprocessing : false
        	}),
        	_settings = new Backbone.Model();

        var _options = {
        	loading : function (status, options) {
        	   $('body').toggleClass('processing', status.get('isprocessing'));
        	},

        	onload : function (model, response, options) {
        		console.log('default onload');
        	}
        }

        var _init = function (options) {        	
            var opts = _.defaults(options || {}, _options);
            _status.on('change:isprocessing', opts.loading);
            _settings.fetch({
            	url:'http://localhost:7777/api/settings',
            	success : function(model) {
            		opts.onload(model);
            	}
            });
        };

        return {
            status: {
            	set : function (status) {
            		_status.set({ isprocessing : status});
            	},

            	get : function () {
            		_status.get('isprocessing');
            	}
            },

            init: function (options) {
                _init(options);
                this.Settings = _settings;
            },

            routes : function (router, route, params) {
            	_router = router;
            },

            isPostRouter : function () {
            	return _router === 'post'
            }
        };    
    })();

    return app;
});