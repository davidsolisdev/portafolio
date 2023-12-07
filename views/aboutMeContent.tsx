import React from "react";
import TitleAboutMe from "../components/sections_Titles/about_me";
import style from "../styles/aboutMeContent.module.css";
import styleHover from "../components/sections_Titles/about_me/hoverText/hoverText.module.css";
import PictureAboutMe from "../components/picture_About_Me";
import ListSoftwareAboutMe from "../components/list_software_about_me/listSoftwareAboutMe";

function SkillsContent() {
  return (
    <section
      className={`${styleHover.hover_text_about_container_section} ${style.skill_content_container}`}
      id="about"
    >
      <article className={style.text_container}>
        <TitleAboutMe />
        <p className={style.paragrph} data-aos="fade-up-right">
          ¡Hola! Me llamo David Solis, soy un apasionado del desarrollo en
          diferentes plataformas, mi pasión inicio en 2018 cuando conocí la
          programación y fue como encontrar el amor a primera vista.
          <br />
          <br />
          Me desenvuelvo tanto en el Back-End como en el Front-End, en
          aplicaciones web, móviles y de escritorio.
          <br />
          <br />
          Me enfoco en las tecnologías más eficientes para cada plataforma en la
          que desarrollo, ya que soy creyente de la optimización de los recursos
          que se utilizan, ya sea el servidor para el software de Back-End, o
          los celulares o computadoras de los clientes que utilizan el
          desarrollo Front-End.
          <br />
          <br />
          Mi experiencia real en la rama de programación inicia en 2019 cuando
          en mi universidad se realizó una competencia de proyectos de
          programación, en dicha competencia obtuve el PRIMER lugar. Desde
          entonces supe que mi pasatiempo también podría ser mi fuente de
          ingresos, por lo que me enfoque en esta bella rama de la informática.
          <br />
          <br />
          Mi experiencia profesional inició en 2020, cuando decido iniciar mi
          camino como desarrollador freelancer, creando software para diferentes
          clientes, tanto nacionales como internacionales, ya que obtenía
          proyectos en plataformas de trabajo freelancer.
          <br />
          <br />A continuación detallo el tipo de software que desarrollo:
        </p>
        <ListSoftwareAboutMe />
      </article>
      <article className={style.picture_container} data-aos="zoom-in">
        <PictureAboutMe />
      </article>
    </section>
  );
}

export default SkillsContent;
