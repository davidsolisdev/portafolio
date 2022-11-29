import React from "react";
import styles from "./time_line.module.css";

function TimeLine({ children }: any) {
  return <ol className={styles.time_line_container}>{children}</ol>;
}

export default TimeLine;
