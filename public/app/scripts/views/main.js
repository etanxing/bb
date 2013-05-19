/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    '../views/listpost',
    '../views/navigation',
    'text!../templates/main.html'
], function ($, _, Backbone, ListPostView, NavigationView, main) {
    'use strict';

    var MainView = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, 'render', 'renderPost');
            this.listenTo(this.collection, 'add', this.renderPost);
        },

        renderPost: function (post) {
            var view = new ListPostView({model:post});
            $('.content').append(view.render().el);
            console.log('add collection length: %d', $('.content article').length);
        },

        unrender : function () {
            this.collection.remove(this.collection.models);
        }
    });

    return MainView;
});