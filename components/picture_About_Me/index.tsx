import React from "react";
import style from "./picture_about_me.module.css";

function PictureAboutMe() {
  return (
    <section className={style.container}>
      <article className={style.border_picture_background}>
        <article
          className={style.picture}
          style={{ backgroundImage: "url(/foto.jpeg)" }}
        ></article>
      </article>
    </section>
  );
}

export default PictureAboutMe;
