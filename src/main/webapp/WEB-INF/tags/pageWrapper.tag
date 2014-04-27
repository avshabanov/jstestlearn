<%@ tag body-content="scriptless" isELIgnored="false" %>
<%@ attribute name="title" required="true" type="java.lang.String" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${title}</title>
  <link rel="stylesheet" type="text/css" href="<c:url value="/static/app/css/style.css"/>" />
  <link rel="stylesheet" type="text/css" href="<c:url value="/static/bootstrap-3.1.1/css/bootstrap.css"/>" />
  <link rel="stylesheet" type="text/css" href="<c:url value="/static/bootstrap-3.1.1/css/bootstrap-theme.css"/>" />
</head>
<body>
<jsp:doBody/>
</body>
</html>
