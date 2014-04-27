
module(["view", "model", "$"], function (view, model, $) {

  function produceAddNewPostNotification() {
    var $notification = $($("#success-notification-template").text());
    $("#post-notifications").append($notification);
    $notification.delay(1000).fadeOut(500, function () {
      $notification.remove();
    });
  }

  function produceAddNewPost() {
    var $postList = $("#post-list");
    return function addNewPost(postPayload) {
      var post = new model.Post({payload: postPayload});
      var postItemView = new view.PostItemView({model: post});
      postItemView.appendTo($postList);
    }
  }

  $(document).ready(function () {
    var samplePosts = [
      {t: "First Post", c: "My Post Content"},
      {t: "Second Post", c: "Second Post Content: Lorem Ipsum..."}
    ];

    var addNewPost = produceAddNewPost();

    var addSamplePosts = function (notify) {
      $.each(samplePosts, function (_, payload) {
        addNewPost(payload);
      });

      if (!notify) {
        return;
      }

      produceAddNewPostNotification();
    };

    $("#add-sample-posts").click(function () { addSamplePosts(true); });

    addSamplePosts(false);
  });
});


