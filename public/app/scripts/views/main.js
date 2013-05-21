/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    '../views/listpost',
    '../views/navigation'
], function ($, _, Backbone, ListPostView, NavigationView) {
    'use strict';

    var MainView = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, 'render', 'renderPost');
            this.listenTo(this.collection, 'add', this.renderPost);
        },

        renderPost: function (post) {
            var view = new ListPostView({model:post});
            $('.content').append(view.render().el);
            view.$el.fadeIn();
        },

        unrender : function (transition) {
            var self = this;
            $('.content article').fadeOut(function () {
                self.collection.remove(self.collection.models);
                transition.resolve();
            });
        }
    });

    return MainView;
});