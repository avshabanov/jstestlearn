/**
 * Declares post view model
 */
module(["view"], function (view) {
  view.PostItemView = view.View.extend({
    template: "#publication-item-template",

    ui: {
      content: ".content",
      title: ".title"
    },

    onRender: function () {
      this.ui.title.text(this.model.getTitle());
      this.ui.content.text(this.model.getContent());
    },

    deletePost: function () {
      var self = this;
      this.$el.fadeOut(300, function () {
        self.remove();
      });
    },

    events: {
      "click .delete": "deletePost"
    }
  });
});
