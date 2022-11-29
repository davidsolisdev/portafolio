import React from "react";
import HoverText from "./hoverText";
import style from "./skills.module.css";

function TitleSection() {
  return (
    <section className={`${style.container}`}>
      <article className={style.text}>
        <HoverText text="Experiencia" />
      </article>
      <article className={style.line}></article>
    </section>
  );
}

export default TitleSection;
