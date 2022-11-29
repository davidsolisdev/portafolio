import React from "react";
import styles from "./show_more_projects.module.css";

function ShowMoreProjects() {
  return (
    <button className={`${styles.button} ${styles.learn_more}`}>
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`}></span>
      </span>
      <span className={styles.button_text}>Ir a Github</span>
    </button>
  );
}

export default ShowMoreProjects;
