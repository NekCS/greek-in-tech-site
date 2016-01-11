define([
	'backbone',
	'jquery'
], function (Backbone, $) {
	return Backbone.View.extend({
		el: $('.loader'),

		render: function () {

			this.on('hide', this.hideLoader, this);

			return this;
        },

		hideLoader: function () {

			this.$el.hide();
		}

	});
});
