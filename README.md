Spring MVC-driven web application with jasmine tests for javascript
===================================================================

## Prerequisites

Install

```
maven
```

## Start

In Jetty:

```
mvn jetty:run -Pjetty-local
```

In Tomcat:

```
mvn tomcat7:run -Ptomcat-local
```

### Testing with curl

```
curl 127.0.0.1:8080/rest/post/list
```

### Testing with stand-alone Jasmine

Open ``$jstestlearn/src/main/webapp/test/unit/SpecRunner.html`` in browser.

## Tags

* ``initial-structure`` - initial project structure, without jasmine
* ``rest-api-demo`` - REST API demo + load testing results, without jasmine
* ``jasmine-tests`` - Added Jasmine tests + bonus: JS entity-object, disabled jsessionid for local jetty
