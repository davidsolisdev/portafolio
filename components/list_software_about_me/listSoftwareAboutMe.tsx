import React from "react";
import style from "./list_software_about_me.module.css";

function ListSoftwareAboutMe() {
  return (
    <section className={style.container_lists} data-aos="fade-right">
      <article className="ml-[30px]">
        <p className={style.item_list}>&#128421; API Rest</p>
        <p className={style.item_list}>&#128421; API GraphQl</p>
        <p className={style.item_list}>&#128421; WebSockets</p>
      </article>
      <article className="ml-[40px]">
        <p className={style.item_list}>&#127758; Aplicaicones Web</p>
        <p className={style.item_list}>&#128241; Aplicaciones Moviles</p>
        <p className={style.item_list}>&#128187; Aplicaciones Desktop</p>
      </article>
    </section>
  );
}

export default ListSoftwareAboutMe;
