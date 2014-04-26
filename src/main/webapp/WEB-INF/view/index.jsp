<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tag" tagdir="/WEB-INF/tags" %>
<%@ page pageEncoding="UTF-8" contentType="text/html;charset=UTF-8" language="java" %>

<tag:pageWrapper title="JSTestLearn &raquo; Main">
<div class="inlet">
  <div class="panel panel-default">
    <div class="panel-body">
      <p><span class="glyphicon glyphicon-asterisk"></span> Hello there!</p>
      <hr/>
      <ul id="work-items">
      </ul>
    </div>
  </div>
</div>

<script id="publication-item-template" type="text/template">
  <li>
    <h3 class="title"></h3>
    <p class="content"></p>
  </li>
</script>

<%-- Scripts --%>
<tag:vendorScripts/>
<tag:commonAppScripts/>
<script type="text/javascript" src="<c:url value="/static/js/app/entry-point.js"/>"></script>
</tag:pageWrapper>
