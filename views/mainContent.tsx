import React from "react";
import ButtonMainContent from "../components/ButtonMainContent";
import CodeEditor from "../components/code_editor";
import style from "../styles/mainContent.module.css";

function MainContent() {
  return (
    <section className={style.main_content}>
      <section className={style.text_content} data-aos="fade-right">
        <p className={`${style.hola_nombre} text-primary`}>
          Hola, mi nombre es
        </p>
        <h1 className={`${style.nombre}`}>David Solis</h1>
        <h1 className={`${style.subtitle_nombre}`}>
          Desarrollo software multiplataforma
        </h1>
        <article className={style.short_description}>
          <p>
            Soy un desarrollador Full-Stack enfocado en la creación de software
            multiplataforma con el mejor performance posible, apasionado por la
            programación y por los lenguajes tipados, multiparadigma y de
            propósito general.
            <br />
            <br />
            Mi pasión por la programación comenzó en 2018 cuando conocí la
            programación, en ese momento fue como encontrar el amor a primera
            vista.
          </p>
        </article>
        <ButtonMainContent>Visita mi Github!</ButtonMainContent>
      </section>
      <section className={style.code_content}>
        <CodeEditor />
      </section>
    </section>
  );
}

export default MainContent;
