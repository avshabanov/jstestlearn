package com.alexshabanov.board.controller.rest;

import com.alexshabanov.board.model.DomainObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Base class for all the REST controllers
 *
 * @author Alexander Shabanov
 */
public abstract class RestControllerBase {
  protected final Logger log = LoggerFactory.getLogger(getClass());

  @ExceptionHandler(IllegalArgumentException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ResponseBody
  public ErrorResponse illegalArgument(IllegalArgumentException e) {
    return prepareErrorResponse(e);
  }

  @ExceptionHandler({IllegalStateException.class})
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ErrorResponse serviceException(Exception e) {
    return prepareErrorResponse(e);
  }

  public static final class ErrorResponse extends DomainObject {
    private String name;
    private String message;

    // serialization
    public ErrorResponse() {
    }

    public ErrorResponse(String message, String name) {
      this();
      this.message = message;
      this.name = name;
    }

    public String getName() {
      return name;
    }

    public String getMessage() {
      return message;
    }
  }

  // uncomment when spring security will be added - and come up with more optimal way to get accountId by principal
//  protected String getCurrentAccountId(Principal principal) {
//    if (principal == null) {
//      throw new IllegalStateException("User is not logged in"); // shouldn't happen
//    }
//    return principal.getName(); // name == id?
//  }

  //
  // Private
  //

  // TODO: get client request ID to track client errors+metrics+logging
  private ErrorResponse prepareErrorResponse(Exception e) {
    log.warn("REST error", e);
    return new ErrorResponse(e.getClass().getSimpleName(), e.toString());
  }
}
