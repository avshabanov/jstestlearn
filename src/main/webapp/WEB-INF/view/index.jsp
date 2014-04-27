<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tag" tagdir="/WEB-INF/tags" %>
<%@ page pageEncoding="UTF-8" contentType="text/html;charset=UTF-8" language="java" %>

<tag:pageWrapper title="JSTestLearn &raquo; Posts">
<div class="inlet">
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="post-container-heading-wrapper">
        <div class="pull-right">
          <button id="add-sample-posts" class="btn btn-default btn-sm">Add Sample Posts</button>
        </div>
        <h3 class="panel-title">Post List</h3>
      </div>
    </div>
    <div class="panel-body">
      <div id="post-notifications">
      </div>
      <ul id="post-list" class="list-unstyled">
      </ul>
    </div>
  </div>
  <div id="new-post-form" class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">New Post</h3>
    </div>
    <div class="panel-body">
      <div class="form-group">
        <input type="text" class="title form-control" placeholder="Title"/>
      </div>
      <div class="form-group">
        <textarea type="memo" class="content form-control" placeholder="Content"></textarea>
      </div>
      <div class="form-group">
      <button class="submit-post-btn btn btn-primary">Submit New Post</button>
      </div>
    </div>
  </div>
</div>

<script id="success-notification-template" type="text/template">
  <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
    <strong>OK!</strong> New post has been added.
  </div>
</script>

<script id="publication-item-template" type="text/template">
  <li>
    <div>
      <div class="pull-right">
        <button class="btn btn-danger delete">Delete</button>
      </div>
      <h3 class="title"></h3>
      <p class="content"></p>
    </div>
  </li>
</script>

<%-- Scripts --%>
<tag:commonScripts/>

<%-- Views --%>
<script type="text/javascript" src="<c:url value="/static/js/app/view/post-item-view.js"/>"></script>
<script type="text/javascript" src="<c:url value="/static/js/app/view/add-post-view.js"/>"></script>
<%-- Entry Point --%>
<script type="text/javascript" src="<c:url value="/static/js/app/entry-point.js"/>"></script>
</tag:pageWrapper>
