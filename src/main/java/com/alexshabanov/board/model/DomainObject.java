package com.alexshabanov.board.model;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * Represents base class for all the domain objects.<p/>
 * Provides convenient reflection-based implementations of the basic Object's method
 * such as <code>hashCode</code>, <code>equals</code> and <code>toString</code>.
 *
 * @author Alexander Shabanov
 */
public abstract class DomainObject {

  @Override
  public int hashCode() {
    return HashCodeBuilder.reflectionHashCode(this);
  }

  @SuppressWarnings("EqualsWhichDoesntCheckParameterClass")
  @Override
  public boolean equals(Object obj) {
    return EqualsBuilder.reflectionEquals(this, obj);
  }

  @Override
  public String toString() {
    return ToStringBuilder.reflectionToString(this);
  }
}
