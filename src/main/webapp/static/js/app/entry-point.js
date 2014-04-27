
module(["view", "model", "$"], function (view, model, $) {

  $(document).ready(function () {
    var samplePosts = [
      {t: "First Post", c: "My Post Content"},
      {t: "Second Post", c: "Second Post Content: Lorem Ipsum..."}
    ];

    var $postList = $("#post-list");

    var addSamplePosts = function () {
      $.each(samplePosts, function (k, v) {
        var post = new model.Post({payload: v});
        var postItemView = new view.PostItemView({model: post});
        postItemView.appendTo($postList);
      });


    };

    $("#add-sample-posts").click(addSamplePosts);

    addSamplePosts();
  });
});


