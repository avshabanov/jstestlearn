
module(["view", "model", "$"], function (view, model, $) {

  $(document).ready(function () {
    var ItemView = view.View.extend({
      template: "#publication-item-template",

      ui: {
        content: ".content",
        title: ".title"
      },

      onRender: function () {
        this.ui.title.text("Lorem ipsum");
        this.ui.content.text("Lorem ipsum");
      }
    });

    var itemView = new ItemView();
    itemView.appendTo($("#work-items"));
  });
});


