package com.alexshabanov.board.controller.rest;

import com.alexshabanov.board.model.Post;
import com.google.common.collect.ImmutableList;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author Alexander Shabanov
 */
@Controller
@RequestMapping("/rest/post")
public final class PostRestController extends RestControllerBase {

  @RequestMapping(value = "/list", method = RequestMethod.GET)
  @ResponseBody
  public List<Post> getPosts() {
    return ImmutableList.of(new Post("First post", "Lorem ipsum dolorem sit amet"));
  }
}
