package com.alexshabanov.board.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public final class Post extends DomainObject {
  @JsonProperty("t") private String title;
  @JsonProperty("c") private String content;

  // serialization
  public Post() {
  }

  public Post(String title, String content) {
    this();
    this.title = title;
    this.content = content;
  }

  public String getTitle() {
    return title;
  }

  public String getContent() {
    return content;
  }
}
