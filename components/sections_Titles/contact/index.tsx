import React from "react";
import HoverText from "./hoverText";
import style from "./about_me.module.css";

function TitleSection() {
  return (
    <section className={`${style.container}`}>
      <article className={style.text}>
        <HoverText text="contacto" />
      </article>
      <article className={style.line}></article>
    </section>
  );
}

export default TitleSection;
