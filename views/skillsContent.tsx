import React from "react";
import TitleSection from "../components/sections_Titles/skills";
import styles from "../styles/sikills_content.module.css";
import styleHoverText from "../components/sections_Titles/skills/hoverText/hoverText.module.css";
import SkillsTitles from "../components/skills_titles";
import GoImage from "../components/images_skills/languajes/goImage";
import DartImage from "../components/images_skills/languajes/dartImage";
import TypescriptImage from "../components/images_skills/languajes/typescriptImage";
import JavascriptImage from "../components/images_skills/languajes/javascriptImage";
import FlutterImage from "../components/images_skills/frameworks/flutterImage";
import EchoImage from "../components/images_skills/frameworks/echoImage";
import ReactImage from "../components/images_skills/frameworks/reactImage";
import FiberImage from "../components/images_skills/frameworks/fiberImage";
import NextJSImage from "../components/images_skills/frameworks/nextJSImage";
import ExpressImage from "../components/images_skills/frameworks/expressImage";
import DockerImage from "../components/images_skills/other_tools/dockerImage";
import GitImage from "../components/images_skills/other_tools/gitImage";
import HtmlImage from "../components/images_skills/other_tools/htmlImage";
import CssImage from "../components/images_skills/other_tools/cssImage";

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
          <SkillsTitles>Lenguajes de Programación</SkillsTitles>
        </div>
        <section
          className={styles.container_programing_languajes}
          data-aos="fade-down"
        >
          <GoImage />
          <DartImage />
          <TypescriptImage />
          <JavascriptImage />
        </section>

        <div className={styles.tite_frameworks} data-aos="fade-right">
          <SkillsTitles>Frameworks</SkillsTitles>
        </div>
        <section className={styles.container_frameworks} data-aos="fade-right">
          <FlutterImage />
          <EchoImage />
          <ReactImage />
          <FiberImage />
          <NextJSImage />
          <ExpressImage />
        </section>

        <div className={styles.title_tools} data-aos="fade-up">
          <SkillsTitles>Otras Herramientas</SkillsTitles>
        </div>
        <section className={styles.container_tools} data-aos="fade-up">
          <div className={styles.sub_container_tools}>
            <DockerImage />
            <GitImage />
          </div>
          <div className={styles.sub_container_tools}>
            <HtmlImage />
            <CssImage />
          </div>
        </section>
      </article>
    </section>
  );
}

export default SkillsContent;
