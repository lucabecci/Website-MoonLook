import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import Item from "./Item";

interface Props {}

const Info = (props: Props) => {
  const history = useHistory();

  return (
    <Fragment>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              SERVICIOS
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
            Estos son algunos de los servicios que brindamos, puede dirigirse a la seccion de precios para obtener mas informacion de algunos servicios. Para otro tipo de servicios contactese con nosotros.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <Item 
              title="Landing page" 
              item1="Diferentes vistas dependiendo el plan."  
              item2="Las imagenes que quieras para mostrar tu contenido."
              item3="Seccion de contacto con redes, telefono y email."
              /> 
              <Item 
              title="E-Commerce" 
              item1="Panel admin para control de stock, precios y ventas."  
              item2="Cambios de stock, precios y otros en tiempo real."
              item3="Integracion con MercadoPago(Argentina)"
              /> 
              <Item 
              title="Blog" 
              item1="Panel admin para control del blog."  
              item2="Seccion de informacion, contacto, portfolio y posts"
              item3="Integracion de analitycs"
              /> 
              <Item 
              title="Sistemas de control para tu negocio" 
              item1="Control de stock."  
              item2="Control de ventas"
              item3="Control de presupuesto"
              /> 
              <Item 
              title="Sistemas institucionales" 
              item1="Control de alumnos, profesores, etc."  
              item2="Control de materias-cursos."
              item3="Control de eventos-clases"
              /> 
              <Item 
              title="Sistemas Empresariales" 
              item1="Control de presupuestos"  
              item2="Control de eventos-fechas importantes."
              item3="Control de objetivos"
              /> 
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => history.push("/precios")}>
            Precios
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Info;
