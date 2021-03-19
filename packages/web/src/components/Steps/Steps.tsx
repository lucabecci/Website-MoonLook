import React, { Fragment } from "react";
import ItemStep from "./ItemStep";

interface Props {}

const Steps = (props: Props) => {
  return (
    <Fragment>
      <section className="text-gray-600 body-font">
        <div className="sm:pt-20 flex flex-wrap w-full flex-col items-center text-center pt-6">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-800">
            PASOS
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80 text-gray-600">
            Aqui podras los pasos requeridos para la construccion de tu sistema
            y asi conseguir un sistema de alta calidad.
          </p>
        </div>
        <div className="container px-5 py-16 mx-auto flex flex-wrap">
          <ItemStep
            value={1}
            title="Coordinacion de llamadas y seña"
            description="El primer paso es coordinar una llamada para acordar una llamada para charlar sobre el diseño del sistema y sus preferencias. Ademas, tambien necesitara dar una seña para comenzar a trabajar en el proyecto."
          />
          <ItemStep
            value={2}
            title="Muestra de diseños y soluciones"
            description="En este paso tendremos una llamada donde acordaremos el diseño del sistema para comenzar a desarrollarlo. Si usted eligio un sistema complejo, en este paso mostraremos las soluciones encontradas y por desarrollar para abordar el mismo."
          />
          <ItemStep
            value={3}
            title="Pago total y puesta en produccion"
            description="Este es el paso final del proceso. Nos comunicaremos con usted para mostrarle su sistema y ver si quiere algun cambio. En el mismo usted debera pagar el faltante del dinero para que el sistema sea puesto en produccion y pueda ser usado por todo el mundo/empresa/escuela/etc."
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Steps;
