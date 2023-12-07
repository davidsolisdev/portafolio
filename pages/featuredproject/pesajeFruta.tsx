import React from "react";
import CustomHead from "../../components/customHead";
import FeaturedProject from "../../views/featuredProject";

function PesajeFruta() {
  return (
    <>
      <CustomHead title="David Solis - Pesaje Fruta" />
      <FeaturedProject
        images={[
          "/palmas1.png",
          "/palmas2.png",
          "/palmas3.png",
          "/palmas4.png",
          "/palmas5.png",
          "/palmas6.png",
          "/palmas7.png",
          "/palmas8.png",
        ]}
        tecnologies={[".Net 7", "ReactJS"]}
        title="Pesaje de Fruta"
        private={true}
      >
        <p>
          Proyecto privado para reconocida empresa internacional, su función es
          él pesaje de camiones con productos variados, dichos productos van
          desde fruta hasta aceites que se obtienen de la palma y otros árboles.
          Dicho desarrollo es multi-empresa, ya que la empresa que me contrato
          para este desarrollo también cuenta con otra empresa asociada que
          tiene los mismos requerimientos.
        </p>
        <p className="mt-4">
          Este desarrollo se conecta a una báscula serial y a una báscula ETH,
          las cuáles toman el peso de los camiones cuando pasan por el punto de
          pesaje, en el cual se registra primero el camión vacío y luego lleno,
          de esta manera se obtiene el resultado del peso neto del producto a
          transportar.
        </p>
        <p className="mt-4">
          De la misma manera, en este desarrollo también se registran distintos
          catálogos como pueden ser: camiones, taras de vehículos, proveedores,
          clientes, pilotos, fincas de producto, lotes, entre otra gran variedad
          de datos necesarios para el funcionamiento de la empresa.
        </p>
        <p className="mt-4">
          También cuenta con un apartado de reportes en PDF, dichos reportes
          indican porcentajes y datos relevantes para la administración de las
          empresas, en los cuales se puede delimitar por fechas los resultados
          que se desean obtener.
        </p>
        <p className="mt-4">
          Dicho desarrollo cuenta con replicación de datos, ya que en las fincas
          donde se utiliza el programa tienden a tener inestabilidad con su
          conexión a red, por lo que los datos se registran en una base de datos
          separada por cada instancia, y una vez al día los datos de cada
          báscula se replican en un servidor central.
        </p>
      </FeaturedProject>
    </>
  );
}

export default PesajeFruta;
