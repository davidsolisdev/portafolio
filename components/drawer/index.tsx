import React from "react";
import styles from "./drawer.module.css";

function Drawer() {
  return (
    <div className={styles.drawer_section_container}>
      <nav className={styles.drawer_container}></nav>
    </div>
  );
}

export default Drawer;
