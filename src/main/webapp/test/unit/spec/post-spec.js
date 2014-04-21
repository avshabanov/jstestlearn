describe("app.model.Post", function () {
  var model = app.model;
  var post;
  var content = "content";
  var title = "title";

  beforeEach(function () {
    post = new model.Post({model: {"content": content, "title": title}});
  });

  it("should test title", function () {
    expect(post.getTitle()).toEqual(title);
  });

  it("should test content", function () {
    expect(post.getContent()).toEqual(content);
  });

  it("should be serialization-friendly", function () {
    expect(JSON.parse(JSON.stringify(post))).toEqual({"c": content, "t": title});
  });
});