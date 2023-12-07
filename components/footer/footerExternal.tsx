import React from "react";
import IconHeader from "../header/iconHeader";
import LinkFooter from "./linkFooter";
import styles from "./footer.module.css";
import { urlFront } from "../../utils/url";

function FooterExternal() {
  return (
    <footer className={styles.footer_container} data-aos="zoom-in-up">
      <section className={styles.icons_container}>
        <div className={styles.line_left}></div>
        <div className={styles.content_icons}>
          <IconHeader
            urlIcon="/linkedin.png"
            href="https://linkedin.com/in/davidsolisdev"
          />
          <IconHeader
            urlIcon="/github.png"
            href="https://github.com/davidsolisdev"
          />
        </div>
        <div className={styles.line_rigth}></div>
      </section>

      <section className={styles.links_container}>
        <LinkFooter href={`${urlFront}/#about`} text="Sobre mi" />
        <div className={styles.spacing_links}></div>
        <LinkFooter href={`${urlFront}/#skills`} text="Habilidades" />
        <div className={styles.spacing_links}></div>
        <LinkFooter href={`${urlFront}/#experience`} text="Experiencia" />
        <div className={styles.spacing_links}></div>
        <LinkFooter href={`${urlFront}/#projects`} text="Proyectos" />
        <div className={styles.spacing_links}></div>
        <LinkFooter href={`${urlFront}/#contact`} text="Contacto" />
      </section>

      <section className="w-full flex flex-row flex-wrap items-center justify-around">
        <p>
          <span className="mr-1 text-[1.2em]">&copy;</span>
          <span className="mr-1 text-[1.2em]">2022</span>{" "}
          <span
            className="mr-1 text-[1.2em] font-bold cursor-pointer"
            onClick={() => {
              window.location.href = urlFront;
            }}
          >
            David Solis
          </span>
        </p>
      </section>
    </footer>
  );
}

export default FooterExternal;
