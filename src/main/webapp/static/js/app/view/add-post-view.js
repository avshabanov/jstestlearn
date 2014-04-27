/**
 * Declares post submission view
 */
module(["view", "model"], function (view, model) {
  view.AddPostView = view.View.extend({
    el: "#new-post-form",

    ui: {
      content: ".content",
      title: ".title"
    },

    onRender: function () {

    },

    clear: function () {
      this.ui.content.val("");
      this.ui.title.val("");
    },

    submitPost: function () {
      var title = this.ui.title.val();
      var content = this.ui.content.val();
      if (title.length === 0) {
        alert("Title is empty!");
        return;
      }
      if (content.length === 0) {
        alert("Content is empty!");
        return;
      }

      this.onSubmitPost(new model.Post({model: {title: title, content: content}}));

      this.clear();
    },

    onSubmitPost: function (post) {
      throw new Error("abstract method call: onSubmitPost, post=" + post);
    },

    events: {
      "click .submit-post-btn": "submitPost"
    }
  });
});
