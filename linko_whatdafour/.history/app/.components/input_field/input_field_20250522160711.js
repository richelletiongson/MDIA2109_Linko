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
  rightButton
}) {
  const inputFieldClass = classNames(
    styles.inputField,
    styles[size],
    styles[color]
  );

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        type="text"
        className={inputFieldClass}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={rightButton ? { paddingRight: 48 } : {}}
      />
      {rightButton && (
        <span style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
          {rightButton}
        </span>
      )}
    </div>
  );
}