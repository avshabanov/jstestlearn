package com.alexshabanov.board.model;

public final class Post {
  private String title;
  private String content;

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

  @Override
  public String toString() {
    final StringBuilder sb = new StringBuilder();
    sb.append("Hello");
    sb.append("{greeting='").append(getTitle()).append('\'');
    sb.append(", origin='").append(getContent()).append('\'');
    sb.append('}');
    return sb.toString();
  }
}
