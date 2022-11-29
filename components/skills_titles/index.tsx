import React from "react";
import styles from "./skills_titles.module.css";

interface IPropsSkillsTitles {
  children?: any;
  fontSize?: string;
}

function SkillsTitles({ fontSize = "2.2em", children }: IPropsSkillsTitles) {
  return (
    <h2 className={styles.title} style={{ fontSize: fontSize }}>
      {children}
    </h2>
  );
}

export default SkillsTitles;
