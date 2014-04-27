/**
 * Simple Marionette-alike template-based view.
 *
 * @author Alexander Shabanov
 */
module(["view", "$"], function (view, $) {
  function View(_createView) {
    this._createView = _createView;
    this.ui = {};
  }

  View.prototype.appendTo = function ($target) {
    this.$el = this._createView();
    $target.append(this.$el);
    this.onRender();
    return this;
  }

  View.prototype.onRender = function () {
    // do nothing
  }

  View.prototype.remove = function () {
    this.$el.remove();
  }

  function makeCreateViewFn(template, ui, events) {
    var $template = $(template);
    if ($template.size() !== 1) {
      throw new Error("one template expected, got " + $template + " for " + template);
    }

    var eventBinderFns = []; // event binder functions
    $.each(events, function (event, handler) {
      var selectorIndex = event.indexOf(" ") + 1;
      var selector = (selectorIndex > 0 ? event.substring(selectorIndex) : undefined);
      event = (selectorIndex > 0 ? event.substring(0, selectorIndex - 1) : event);
      eventBinderFns.push(function () {
        var self = this;
        var el = (selector ? $(selector, this.$el): this.$el);
        this.$el.on(event, function () {
          return self[handler].apply(self, arguments);
        });
      });
    });

    return function createView() {
      var $el = $($template.text());

      // activate ui
      for (var e in ui) {
        if (!ui.hasOwnProperty(e)) { continue; }

        this.$el = $el;
        this.ui[e] = $(ui[e], $el);
      }

      // bind events
      for (var e in eventBinderFns) {
        if (!eventBinderFns.hasOwnProperty(e)) { continue; }
        eventBinderFns[e].call(this);
      }

      return $el;
    };
  }

  View.extend = function View_extend(viewOptions) {
    if (typeof viewOptions !== "object") {
      throw new Error("options argument is not an object");
    }
    viewOptions = $.extend({
      ui: {},
      events: {}
    }, viewOptions); // safe copy with defaults

    // make 'create view' lambda
    var createView = makeCreateViewFn(viewOptions.template, viewOptions.ui, viewOptions.events);

    // return view object
    var newViewClass = function (options) {
      options = options || {};
      View.call(this, createView);
      if (typeof options.model !== "undefined") {
        this.model = options.model;
      }
    };
    if (typeof viewOptions.name !== "undefined") {
      newViewClass.name = viewOptions.name;
    }
    newViewClass.prototype.__proto__ = View.prototype;

    // copy member functions - except for 'ui', 'template'
    delete viewOptions.ui;
    delete viewOptions.events;
    delete viewOptions.template;
    for (var memberName in viewOptions) {
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
