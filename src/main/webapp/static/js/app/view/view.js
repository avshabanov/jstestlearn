/**
 * Declares application's template manager
 */
module(["view", "$"], function (model, $) {
  function View(_createView) {
    this._createView = _createView;
  }

  View.prototype.appendTo = function ($target) {
    var $el = this._createView();

    $target.append($el);
    return this;
  }

  View.prototype.onRender = function () {
    // do nothing
  }

  function makeCreateViewFn(template, ui) {
    var $template = $(template);
    if ($template.size() !== 1) {
      throw new Error("one template expected, got " + $template + " for " + template);
    }

    return function createView() {
      var $el = $($template.text());
      for (var e in ui) {
        if (!ui.hasOwnProperty(e)) {
          continue;
        }

        this.$el = $el;
        this.ui[e] = $(ui[e], $el);
      }
      return $el;
    };
  }

  View.extend = function View_extend(viewOptions) {
    if (typeof viewOptions !== "object") {
      throw new Error("options argument is not an object");
    }
    viewOptions = $.extend({
      ui: {}
    }, viewOptions); // safe copy with defaults

    // make 'create view' lambda
    var createView = makeCreateViewFn(viewOptions.template, viewOptions.ui);

    // return view object
    var newViewClass = function () {
      View.apply(this, createView);
    };
    if (typeof viewOptions.name !== "undefined") {
      newViewClass.name = viewOptions.name;
    }
    newViewClass.prototype.__proto__ = View.prototype;

    // copy member functions - except for 'ui', 'template'
    delete viewOptions.ui;
    delete viewOptions.template;
    for (var memberName : viewOptions) {
      if (viewOptions.hasOwnProperty(memberName)) {
        newViewClass.prototype[memberName] = viewOptions[memberName];
      }
    }

    return newViewClass;
  }

  //
  // Export
  //

  view.View = View;
});
