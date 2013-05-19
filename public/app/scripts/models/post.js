/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var Post = Backbone.Model.extend({
        defaults: {
        	'slug' : ''
        },
        idAttribute: "_id",
        url : function() {
        	return 'http://localhost:7777/api/item/slug/' + this.get('slug')
        }
    });

    return Post;
});