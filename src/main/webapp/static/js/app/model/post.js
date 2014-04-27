/**
 * Declares post model
 */
module(["model"], function (model) {
  model.DomainObject.define(model, "Post", {
    parameters: {
      "t": "title",
      "c": "content"
    }
  });
});
