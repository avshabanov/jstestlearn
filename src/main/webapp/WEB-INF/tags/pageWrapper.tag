<%@ tag body-content="scriptless" isELIgnored="false" %>
<%@ attribute name="title" required="true" type="java.lang.String" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${title}</title>
  <link rel="stylesheet" type="text/css" href="<c:url value="/static/css/app/style.css"/>" />
  <link rel="stylesheet" type="text/css" href="<c:url value="/static/css/vendor/bootstrap-3.1.1.css"/>" />
  <link rel="stylesheet" type="text/css" href="<c:url value="/static/css/vendor/bootstrap-theme-3.1.1.css"/>" />
</head>
<body>
<jsp:doBody/>
</body>
</html>
