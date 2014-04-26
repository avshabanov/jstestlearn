
$(document).ready(function () {
  var $workItems = $("#work-items");
  var view = new app.view.View({
    template: "#publication-item-template",
    ui: {
      content: ".content",
      title: ".title"
    }
  });
  view.appendTo($workItems);
  view.ui.title.text("Headline");
  view.ui.content.text("Lorem ipsum");
});
