import React from "react";
import styles from "./container_frameworks.module.css";

interface IPropsContainerFramework {
  link: string;
  children?: any;
}

function ContainerFramework(props: IPropsContainerFramework) {
  return (
    <div
      className={styles.container}
      onClick={() => {
        window.open(props.link, "_blank");
      }}
    >
      {props.children}
    </div>
  );
}

export default ContainerFramework;
