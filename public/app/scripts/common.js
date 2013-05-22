/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
], function ($, _, Backbone) {
    'use strict';

    var app = (function () {
        var _status = new Backbone.Model({
        	isprocessing : false
        });

        var _options = {
        	loading : function (status, options) {
        	   $('body').toggleClass('processing', status.get('isprocessing'));
        	}
        }

        var _init = function (options) {
            var opts = _.defaults(options || {}, _options);
            _status.on('change:isprocessing', opts.loading);
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