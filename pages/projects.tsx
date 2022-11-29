import React from "react";
import FooterExternal from "../components/footer/footerExternal";
import HeaderExternal from "../components/header/header_external";
import ProjectNormal from "../components/project/project_normal";
import TitleSection from "../components/sections_Titles/projects";
import stylesHover from "../components/sections_Titles/projects/hoverText/hoverText.module.css";
import styles from "../styles/projects_page.module.css";
import { urlFront } from "../utils/url";

function Projects() {
  const [listProjects, setListProjects] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  return (
    <>
      <HeaderExternal />
      <section
        className={`${styles.projects_page_container} ${stylesHover.hover_text_projects_container_section}`}
      >
        <div className="w-full">
          <TitleSection />
        </div>
        <article className={styles.projects_container}>
          {listProjects.map((project, i) => (
            <ProjectNormal
              key={i}
              link={`${urlFront}/featuredproject/desaparecidos`}
              img="https://cdn.pixabay.com/photo/2022/08/15/09/14/koyasan-temple-7387445_640.jpg"
              title="Desaparecidos"
              description="Proyecto personal, público. Su función es ayudar a las personas a publicar alertas de desaparición de sus familiares de manera inmediata, evitando largos procesos."
              tecnologies={["Flutter", "Next.js", "Typescript", "Go", "Fiber"]}
            />
          ))}
        </article>
      </section>
      <FooterExternal />
    </>
  );
}

export default Projects;
