import React from "react";
import CustomHead from "../../components/customHead";
import FeaturedProject from "../../views/featuredProject";

function LogisticaYdesapchos() {
  return (
    <>
      <CustomHead title="David Solis - Logística y Despachos" />

      <FeaturedProject
        images={[
          "/logistica1.png",
          "/logistica2.png",
          "/logistica3.png",
          "/logistica4.png",
          "/logistica5.png",
          "/logistica6.png",
          "/logistica7.png",
          "/logistica8.png",
          "/logistica9.png",
          "/logistica10.png",
        ]}
        tecnologies={[".Net 7", "Next.js", "Flutter"]}
        title="Logística y Despachos"
        private={true}
      >
        <p>
          Proyecto privado, su función es agilizar la planificación y ejecución
          de los trabajos de logística y despachos, partiendo desde el registro
          y mantenimiento de diferentes catálogos como los vehículos que
          transportarán el producto, los pilotos que conducirán dichos
          vehículos, los tipos de vehículos que se utilizan, entre otros
          catálogos.
        </p>

        <p className="mt-4">
          También permite la creación, modificación y optimización de las rutas
          tanto en tiempo de recorrido y distancia que recorre el camión, como
          en tonelaje y otros parámetros que se han tenido en cuenta para hacer
          él proceso lo más óptimo posible.
        </p>

        <p className="mt-4">
          Incluye las opciones de asignar conteos de producto siendo los
          conteos: totales, parciales y al azar. También se pueden realizar
          movimientos de productos entre las diferentes bodegas con las que
          cuenta la empresa.
        </p>

        <p className="mt-4">
          Es un sistema multi-rol en el cual se crean usuarios y se definen las
          opciones que le mostrará tanto la aplicación web, como la aplicación
          móvil.
        </p>

        <p className="mt-4">
          La aplicación móvil permite a los encargados de bodega realizar los
          conteos y transferencias de producto de una manera eficiente, ya que
          solo debe realizar el escaneo del código QR o código de barras de
          dicho paquete de producto y de esta manera la aplicación llevará el
          conteo automático. De esta manera se ha optimizado dos tercios el
          tiempo que llevaba realizar esta tarea de la forma tradicional.
        </p>

        <p className="mt-4">
          También permite el registro de producto que necesita empaque o
          reempaque para que los encargados de esta área puedan llegar a recoger
          el producto y realizar el proceso debido en estos casos.
        </p>

        <p className="mt-4">
          Al finalizar cada paso de los procesos se actualiza automáticamente él
          estado de la tarea, de esta manera se puede llevar un seguimiento de
          las tareas que se han asignado desde la parte administrativa, y con
          estos datos optimizar los procesos y saber con certeza el estado de
          cada tarea.
        </p>
      </FeaturedProject>
    </>
  );
}

export default LogisticaYdesapchos;
