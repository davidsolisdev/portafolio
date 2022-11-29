import React from "react";
import styles from "../styles/featured_project.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonFeaturedProject from "../components/featuredProject/buttonFeaturedProject";
import ChipTecnologie from "../components/featuredProject/chip_tecnologie";
import FooterExternal from "../components/footer/footerExternal";

interface IPropsFeaturedProject {
  images: string[];
  tecnologies: string[];
  title: string;
  private: boolean;
  url?: string;
  children?: any;
}

function FeaturedProject(props: IPropsFeaturedProject) {
  return (
    <section className={styles.featured_project_container}>
      <article className={styles.carrousel_container}>
        <Carousel
          autoPlay
          infiniteLoop
          swipeable
          showThumbs={false}
          className="w-full h-full"
          width="100%"
        >
          {props.images.map((image) => (
            <div className={styles.carrousel_item}>
              <div
                className="w-full h-full bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            </div>
          ))}
        </Carousel>
      </article>

      <article className={styles.container_title}>
        <h1 className={styles.title_project}>
          {props.title}
          {"   "}
          <span> </span>
          {"  "}
          <span className={styles.status_project}>
            ({props.private ? "Privado" : "Público"})
          </span>
        </h1>
      </article>

      <article className={styles.content_project_container}>
        <section className={styles.tecnologies_container}>
          {props.tecnologies.map((tecnologie, i) => (
            <>
              <ChipTecnologie key={i} text={tecnologie} />
              <span key={i} className={styles.separator_tecnologie}></span>
            </>
          ))}
        </section>

        {
          /*!props.private*/ false && (
            <div className={styles.container_button_link}>
              <ButtonFeaturedProject link={props.url} />
            </div>
          )
        }

        <section className={styles.content_project}>{props.children}</section>
      </article>
      <div className="w-full mt-[15px]"></div>
      <FooterExternal />
    </section>
  );
}

export default FeaturedProject;
