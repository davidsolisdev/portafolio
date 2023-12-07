import React from "react";
import styles from "./containerImageSkills.module.css";

interface IPropsContainerImageSkills {
  text: string;
  link: string;
  children?: any;
}

function ContainerImageSkills({
  text,
  link,
  children,
}: IPropsContainerImageSkills) {
  return (
    <div
      className={styles.container_content}
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      <div className={styles.container_image}>{children}</div>
      <div className={styles.container_text}>{text}</div>
    </div>
  );
}

export default ContainerImageSkills;
