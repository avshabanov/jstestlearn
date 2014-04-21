/**
 * Declares post model
 */
(function (model) {
  model.defineDomainObject(app.model, "Post", {
    parameters: {
      "t": "title",
      "c": "content"
    }
  });
} (app.model));
