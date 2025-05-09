import React from "react";
import styles from "./input_field.module.css";

const InputField = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={styles.inputField}
  />
);

export default InputField;