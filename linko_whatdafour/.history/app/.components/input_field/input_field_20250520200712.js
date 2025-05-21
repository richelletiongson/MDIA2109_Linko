"use client";
import React from "react";
import classNames from "classnames";
import styles from "./input_field.module.css";

export default function InputField({
  value,
  onChange,
  placeholder = "Type...",
  size = "medium",
  color = "purple1",
  multiline = false,
  ...rest
}) {
  const inputFieldClass = classNames(
    styles.inputField,
    styles[size],
    styles[color]
  );

  if (multiline) {
    return (
      <textarea
        className={inputFieldClass}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    );
  }

  return (
    <input
      type="text"
      className={inputFieldClass}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
}