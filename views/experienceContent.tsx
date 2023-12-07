import React from "react";
import styles from "../styles/experience_content.module.css";
import styleHover from "../components/sections_Titles/experience/hoverText/hoverText.module.css";
import TitleSection from "../components/sections_Titles/experience";
import TimeLine from "../components/time_line";
import ItemTimeLine from "../components/time_line/itemTimeLine";

function ExperienceContent() {
  return (
    <section
      className={`${styles.experience_content} ${styleHover.hover_text_experience_container_section}`}
      id="experience"
    >
      <div className={styles.container_title}>
        <TitleSection />
      </div>
      <div className={styles.second_container_title}></div>
      <article data-aos="zoom-in-down">
        <TimeLine>
          <ItemTimeLine
            title="Ecommerce"
            fecha="Noviembre 2023 - Hoy en día (Juan Rosario)"
          >
            Actualmente, me encuentro desarrollando una plataforma e-commerce
            para cliente internacional. Día estimado de culminación del
            proyecto: 20 de Diciembre.
          </ItemTimeLine>
          <ItemTimeLine
            title="Proyecto personal Full-Stack y Móvil (Desaparecidos)"
            fecha="Noviembre 2023 - Hoy en día (Propio)"
          >
            En mis tiempos libres me encuentro desarrollando una plataforma para
            ayudar a los familiares de las personas que han desaparecido,
            dándole la oportunidad de publicar inmediatamente las alertas de
            desaparición.
          </ItemTimeLine>

          <ItemTimeLine
            title="Aplicación móvil ejecución de logística, planificación y despachos"
            fecha="Marzo 2023 - Julio 2023 (Arimany)"
          >
            Aplicación para uso interno de la empresa, la cual funciona para
            hacer el conteo de cajas de producto a enviar a través de códigos
            QR, asignación de diferentes tareas como conteos de productos,
            empaque y reempaque de productos, seguimiento de rutas de productos,
            entre otras opciones.
          </ItemTimeLine>

          <ItemTimeLine
            title="Aplicación web administración de logística, planificación y despachos"
            fecha="Diciembre 2022 - Marzo 2023 (Arimany)"
          >
            Aplicación web interna para la administración de diferentes procesos
            de logística entre los que se encuentran: creación y optimización de
            rutas de despachos, restricciones a usuarios tanto en la web como en
            el móvil, creación y mantenimiento de catálogos de vehículos,
            transportistas, etc. Entre otras opciones.
          </ItemTimeLine>

          <ItemTimeLine
            title="Aplicación Full-Stack con conexión a báscula serial para pesaje de camiones con producto"
            fecha="Octubre 2022 - Marzo 2023 (Empresa de fruta)"
          >
            Proyecto freelancer para el pesar camiones con productos,
            administración de diferentes catálogos entre los que se encuentran:
            proveedores, clientes, empresas, distritos, basculas seriales, etc.
            El cual se entregó a importante empresa de exportación de frutas y
            aceites.
          </ItemTimeLine>

          <ItemTimeLine
            title="Guía de practicantes universitarios en la empresa que laboro"
            fecha="Septiembre 2022 – Enero 2023 (Arimany)"
          >
            Aparte de mis labores como desarrollador también me encargue de
            supervisar e instruir a los practicantes universitarios que se
            aceptaron en la empresa.
          </ItemTimeLine>

          <ItemTimeLine
            title="Desarrollo Full-Stack y Desktop para categorización de productos y envío automático de e-mails"
            fecha="Febrero 2022 - Marzo 2021  (Arimany)"
          >
            Aplicación Full-Stack y Desktop para categorización y asignación de
            atributos a nuevos productos producidos en la empresa en la que
            laboro, también el envío de correos electrónicos periódicamente para
            informar al gerente de ventas de los nuevos productos introducidos
            en el inventario de la empresa.
          </ItemTimeLine>

          <ItemTimeLine
            title="Otros proyectos para la empresa en la que laboro y proyectos freelancer"
            fecha="Febrero 2020 - Enero 2021"
          >
            Diferentes proyectos elaborados de forma freelancer y para la
            empresa en la que actualmente laboro.
          </ItemTimeLine>
        </TimeLine>
      </article>
    </section>
  );
}

export default ExperienceContent;
