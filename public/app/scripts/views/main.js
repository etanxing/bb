/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    '../views/listpost',
    '../views/navigation',
    '../common'
], function ($, _, Backbone, ListPostView, NavigationView, Common) {
    'use strict';

    var MainView = Backbone.View.extend({
        className: 'articles',

        initialize: function() {
            _.bindAll(this, 'render', 'renderPost');
            this.listenTo(this.collection, 'add', this.renderPost);
            this.listenTo(this.collection, 'sync', this.render);
        },

        render : function() {
            $('.content').html(this.el);
            Common.status.set(false);
        },

        renderPost: function (post) {
            var view = new ListPostView({model:post});
            this.$el.append(view.render().el);
        },

        unrender : function (transition) {
            var self = this;
            this.$el.fadeOut(function () {
                self.collection.remove(self.collection.models);
                transition.resolve();
            });
        }
    });

    return MainView;
});