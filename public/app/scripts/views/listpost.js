/*global define*/

define([
    'jquery',
    'backbone',
    'text!../templates/listpost.html'
], function ($, Backbone, listpost) {
    'use strict';

    var PostView = Backbone.View.extend({
        tagName : 'article',

        events: {
            'click .entry-title a'  : 'goentry'
        },

        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'remove', this.unrender);
        },

        render: function() {
            this.$el.html(_.template(listpost)({
                post  : this.model.toJSON()
            }))

            return this;
        },

        unrender: function() {
            console.log('remove collection length: %d', $('.content article').length);
            this.remove();
        },

        goentry : function(e){
            Backbone.history.navigate(e.target.title, true);
            return false;
        }
    });

    return PostView;
});