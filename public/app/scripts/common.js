/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var app = (function () {
        var _status = new Backbone.Model({
        	isprocessing : false
        });

        var _options = {
        	loading : function (status, options) {
        		console.log('default loading.')
        	}
        }

        var _init = function (options) {
            _status.on('change:isprocessing', options.loading);
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
            }
        };    
    })();

    return app;
});