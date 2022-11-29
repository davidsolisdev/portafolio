import React from "react";
import styles from "./text_field_styles.module.css";

function TextFieldEmail(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.form_control}>
      <input {...props} name="email" type="email" required />
      <label>
        <span style={{ transitionDelay: "0ms" }}>E</span>
        <span style={{ transitionDelay: "50ms" }}>-</span>
        <span style={{ transitionDelay: "100ms" }}>m</span>
        <span style={{ transitionDelay: "150ms" }}>a</span>
        <span style={{ transitionDelay: "200ms" }}>i</span>
        <span style={{ transitionDelay: "250ms" }}>l</span>
      </label>
    </div>
  );
}

export default TextFieldEmail;
