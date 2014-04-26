/**
 * Declares application's template manager
 */
(function ($, view) {
  function View(options) {
    if (typeof options !== "object") {
      throw new Error("options argument is not an object");
    }
    var $template = $(options.template);

    // initialize ui
    this.ui = {};

    var self = this;
    var ui = options.ui;
    this.appendTo = function appendTo($target) {
      var $el = $($template.text());
      for (var e in ui) {
        self.$el = $el;
        self.ui[e] = $(ui[e], $el);
      }

      $target.append($el);
    }
  }

  function TemplateManager($templateHolder) {
  }

  //
  // Export
  //

  view.TemplateManager = TemplateManager;
  view.View = View;
} (jQuery, app.view));
