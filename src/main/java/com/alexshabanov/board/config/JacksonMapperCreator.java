package com.alexshabanov.board.config;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * @author Alexander Shabanov
 */
public final class JacksonMapperCreator {
  private JacksonMapperCreator() {}

  public static ObjectMapper createMapper() {
    final ObjectMapper mapper = new ObjectMapper();

    mapper.setVisibilityChecker(mapper.getSerializationConfig().getDefaultVisibilityChecker()
        .withFieldVisibility(JsonAutoDetect.Visibility.ANY)
        .withGetterVisibility(JsonAutoDetect.Visibility.NONE)
        .withSetterVisibility(JsonAutoDetect.Visibility.NONE)
        .withCreatorVisibility(JsonAutoDetect.Visibility.NONE));

    return mapper;
  }
}
