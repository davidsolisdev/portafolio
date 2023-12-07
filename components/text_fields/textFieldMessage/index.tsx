import React from "react";
import styles from "./text_field_styles.module.css";

function TextFieldMessage(
  props: React.InputHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <div className={styles.form_control}>
      <textarea {...props} name="message" rows={5} required></textarea>
      <label>
        <span style={{ transitionDelay: "0ms" }}>M</span>
        <span style={{ transitionDelay: "50ms" }}>e</span>
        <span style={{ transitionDelay: "100ms" }}>n</span>
        <span style={{ transitionDelay: "150ms" }}>s</span>
        <span style={{ transitionDelay: "200ms" }}>a</span>
        <span style={{ transitionDelay: "250ms" }}>j</span>
        <span style={{ transitionDelay: "300ms" }}>e</span>
      </label>
    </div>
  );
}

export default TextFieldMessage;
