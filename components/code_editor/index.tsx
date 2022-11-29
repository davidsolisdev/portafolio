import React from "react";
import styles from "./code_editor.module.css";

function CodeEditor() {
  return (
    <div className={styles.card} data-aos="zoom-in-up">
      <div className={styles.tools}>
        <div className={styles.circle}>
          <span className={`${styles.green} ${styles.box}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.yellow} ${styles.box}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.red} ${styles.box}`}></span>
        </div>
      </div>
      <div className={`${styles.card__content}`}></div>
    </div>
  );
}

export default CodeEditor;
