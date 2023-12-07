import React from "react";
import CustomHead from "../../components/customHead";
import FeaturedProject from "../../views/featuredProject";

function Desaparecidos() {
  return (
    <>
      <CustomHead title="David Solis - Desaparecidos" />

      <FeaturedProject
        images={[
          "/desaparecidos1.png",
          "/desaparecidos2.png",
          "/desaparecidos3.png",
          "/desaparecidos4.png",
          "/desaparecidos5.png",
        ]}
        tecnologies={[".Net 8", "Flutter", "Next.js"]}
        title="Desaparecidos"
        private={false}
        url="https://desaparecidosorg.com"
      >
        <p className="mb-4 font-bold text-[1.2em]">
          (Actualmente en desarrollo)
        </p>
        <br />
        <p>
          Desaparecidos es un proyecto público. Su función es proporcionar una
          opción complementaria a las opciones gubernamentales en el tema de
          alertas de desaparición de personas. Evitando de esta manera largos
          procesos, permitiendo publicar alertas inmediatas.
        </p>
        <br />
        <p>
          La plataforma agiliza el proceso de publicación de alertas, ya que se
          puede publicar una desaparición inmediatamente se tenga la sospecha de
          que dicha persona haya desaparecido, de esta manera evitamos que las
          personas deban esperar las horas que determina el gobierno para tomar
          a una persona como desaparecida.
        </p>
        <br />
        <p>
          Esta plataforma sirve como un complemento a los procesos de cada país,
          dichas alertas no son reconocidas como oficiales en los diferentes
          países. La finalidad es crear alertas que ayuden a encontrar a las
          personas desaparecidas, independientemente si el gobierno les da
          validez a dichas alertas.
        </p>
        <br />
        <p className="mt-4">
          El propósito es ayudar a las personas angustiadas por la desaparición
          de familiares y seres queridos.
        </p>
      </FeaturedProject>
    </>
  );
}

export default Desaparecidos;
