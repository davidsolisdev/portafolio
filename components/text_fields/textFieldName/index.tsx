import React from "react";
import styles from "./text_field_styles.module.css";

function TextFieldName(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.form_control}>
      <input {...props} name="name" type="text" required />
      <label>
        <span style={{ transitionDelay: "0ms" }}>N</span>
        <span style={{ transitionDelay: "50ms" }}>o</span>
        <span style={{ transitionDelay: "100ms" }}>m</span>
        <span style={{ transitionDelay: "150ms" }}>b</span>
        <span style={{ transitionDelay: "200ms" }}>r</span>
        <span style={{ transitionDelay: "250ms" }}>e</span>
      </label>
    </div>
  );
}

export default TextFieldName;
