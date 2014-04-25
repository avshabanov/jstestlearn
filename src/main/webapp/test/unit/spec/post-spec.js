describe("app.model.Post", function () {
  var model = app.model;
  var post;
  var content = "content";
  var title = "title";

  beforeEach(function () {
    post = new model.Post({model: {"content": content, "title": title}});
  });

  it("should get title", function () {
    expect(post.getTitle()).toEqual(title);
  });

  it("should get content", function () {
    expect(post.getContent()).toEqual(content);
  });

  it("should be serialization-friendly", function () {
    expect(JSON.parse(JSON.stringify(post))).toEqual({"c": content, "t": title});
  });

  it("should deserialize payload", function () {
      expect(new model.Post({payload: {"t": title, "c": content}})).toEqual(post);
    });
});