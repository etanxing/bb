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
        id : '#content',

        initialize: function() {
            _.bindAll(this, 'render', 'renderPost');
            this.listenTo(this.collection, 'add', this.renderPost);
            this.listenTo(this.collection, 'sync', this.render);
        },

        render: function() {
            //render
            //this.$el.html(main);
            //Insert DOM
            $('#primary').html(this.el);
        },

        renderPost: function (post) {
            var view = new ListPostView({model:post});
            this.$el.append(view.render().el);
        },

        unrender : function () {
            this.collection.remove(this.collection.models);
            this.$el.detach();
        }
    });

    return MainView;
});