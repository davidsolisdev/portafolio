import React from "react";
import Project from "../components/project";
import hoverStyles from "../components/sections_Titles/projects/hoverText/hoverText.module.css";
import TitleSection from "../components/sections_Titles/projects";
import ButtonGooglePlay from "../components/button_google_play";
import ButtonOthersProjects from "../components/button_others_projects";
import { urlFront } from "../utils/url";
import styles from "../styles/projects_content.module.css";

function ProjectsContent() {
  return (
    <section
      className={`${hoverStyles.hover_text_projects_container_section} ${styles.projects_content}`}
      id="projects"
    >
      <TitleSection />
      <article className={styles.projects_container}>
        <div data-aos="fade-right">
          <Project
            link={`${urlFront}/featuredproject/pesajeFruta`}
            img="/palmas1.png"
            title="Pesaje de Fruta"
            description="Proyecto privado para reconocida empresa internacional de exportación de fruta y aceites. Su función es pesar camiones de producto a través de una conexión a báscula serial y ETH, también el control de diferentes catálogos."
            tecnologies={[".Net 7", "ReactJS"]}
          />
        </div>

        <div data-aos="fade-up">
          <Project
            link={`${urlFront}/featuredproject/logisticaYdespachos`}
            img="/logistica2.png"
            title="Logística"
            description="Proyecto privado para la empresa en la que laboro, su función es optimizar la logística y despachos, reduciendo dos tercios del tiempo que anteriormente se utilizaba para estas tareas."
            tecnologies={[".Net 7", "Next.js", "Flutter"]}
          />
        </div>

        <div data-aos="fade-left">
          <Project
            link={`${urlFront}/featuredproject/desaparecidos`}
            img="/desaparecidos1.png"
            title="Desaparecidos"
            description="Proyecto personal, público. Su función es ayudar a las personas a publicar alertas de desaparición de sus familiares de manera inmediata, evitando largos procesos."
            tecnologies={[".Net 8", "Flutter", "Next.js"]}
          />
        </div>
      </article>
      {false && (
        <div className="w-full flex flex-row flex-wrap items-center justify-center mb-10">
          <ButtonOthersProjects />
          <div className={styles.separator_buttons}></div>
          <ButtonGooglePlay />
        </div>
      )}
    </section>
  );
}

export default ProjectsContent;
