import React from "react";
import TitleSection from "../components/sections_Titles/skills";
import styles from "../styles/sikills_content.module.css";
import styleHoverText from "../components/sections_Titles/skills/hoverText/hoverText.module.css";
import SkillsTitle from "../components/skills_titles";
import CSharpImage from "../components/images_skills/languajes/CSharpImage";
import DartImage from "../components/images_skills/languajes/dartImage";
import TypescriptImage from "../components/images_skills/languajes/typescriptImage";
import JavascriptImage from "../components/images_skills/languajes/javascriptImage";
import FlutterImage from "../components/images_skills/frameworks/flutterImage";
import NetCoreImage from "../components/images_skills/frameworks/NetCoreImage";
import ReactImage from "../components/images_skills/frameworks/reactImage";
import NextJSImage from "../components/images_skills/frameworks/nextJSImage";
import DockerImage from "../components/images_skills/other_tools/dockerImage";
import GitImage from "../components/images_skills/other_tools/gitImage";

function SkillsContent() {
  return (
    <section
      className={`${styles.container_skills_content} ${styleHoverText.hover_text_skills_container_section}`}
      id="skills"
    >
      <article className={styles.title_article}>
        <TitleSection />
      </article>
      <article className={styles.second_section_title}></article>

      <article className={styles.skills_content}>
        <div className={styles.title_lenguajes} data-aos="fade-down">
          <SkillsTitle>Lenguajes de Programación</SkillsTitle>
        </div>
        <section
          className={styles.container_programing_languajes}
          data-aos="fade-down"
        >
          <CSharpImage />
          <DartImage />
          <JavascriptImage />
          <TypescriptImage />
        </section>

        <div className={styles.tite_frameworks} data-aos="fade-right">
          <SkillsTitle>Frameworks</SkillsTitle>
        </div>
        <section className={styles.container_frameworks} data-aos="fade-right">
          <NetCoreImage />
          <FlutterImage />
          <ReactImage />
          <NextJSImage />
        </section>

        <div className={styles.title_tools} data-aos="fade-up">
          <SkillsTitle>Otras Herramientas</SkillsTitle>
        </div>
        <section className={styles.container_tools} data-aos="fade-up">
          <div className={styles.sub_container_tools}>
            <GitImage />
            <DockerImage />
          </div>
        </section>
      </article>
    </section>
  );
}

export default SkillsContent;
