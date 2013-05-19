/*global define*/

define([
    'jquery',
    'backbone',
    'text!../templates/post.html'
], function ($, Backbone, post) {
    'use strict';

    var PostView = Backbone.View.extend({
        id : 'content',

        render: function(path) {
            var self = this;
            if (this.model) {
                //Already loaded
                this.renderPost();
            } else {
                this.model.fetch({
                    success: function(model, resp, options){
                        self.renderPost();
                    },

                    error : function(model, resp, options){
                        // 404 page
                        console.log('failed to load model: %s', resp.responseText);
                    }
                })
            }
        },

        renderPost: function() {
            $(this.el).html(_.template(post)({
                post  : this.model.toJSON()
            }))
            
            $('#primary').html(this.el);
        }
    });

    return PostView;
});