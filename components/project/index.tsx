import React from "react";
import styles from "./project.module.css";

interface IPropsProject {
  link: string;
  img: string;
  title: string;
  description: string;
  tecnologies: string[];
}

function Project(props: IPropsProject) {
  return (
    <div
      className={styles.project_container}
      onClick={() => {
        window.open(props.link, "_blank");
      }}
    >
      <div className={styles.container_image}>
        <img className={styles.image} src={props.img} alt="" />
      </div>
      <div className={styles.text_container}>
        <div>
          <h5 className={styles.title_project}>{props.title}</h5>
        </div>
        <p className={styles.description_container}>{props.description}</p>
        <div className="flex fler-row flex-wrap items-center justify-around">
          {props.tecnologies.map((tec, i) => (
            <p key={i} className={styles.tecnologie}>
              {tec}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
