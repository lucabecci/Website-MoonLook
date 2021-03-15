import NormalCard from "./NormalCard";
import SpecialCard from "./SpecialCard";

export const Main = () => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Nuestros Precios
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Estos son algunos de los precios/servicios que ofrecemos. Si esta
          interesado en un servicio que no se encuentre en la aqui, contactese
          con nosotros para una cotizacion especial. El valor de los sistemas
          institucionales/empresariales varia segun lo requerido.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-6 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto mb-5">
        <NormalCard
          type={"Landing Page"}
          price={5000}
          features={[
            "1 VISTAS",
            "HTTPS (Conexion segura)",
            "DOMINIO PUBLICO",
            "HOSTING GRATUITO",
          ]}
        />
        <NormalCard
          type={"Plus Landing Page"}
          price={10000}
          features={[
            "4 VISTAS",
            "HTTPS (Conexion segura)",
            "DOMINIO .com, .net, .dev",
            "HOSTING GRATUITO",
            "SECCION DE CONTACTO",
          ]}
        />
        <SpecialCard
          type={"Blog"}
          price={15000}
          features={[
            "3 VISTAS",
            "HTTPS (Conexion segura)",
            "DOMINIO .com, .net, .dev, .ar",
            "HOSTING GRATUITO",
            "PANEL ADMIN PARA ADMINISTRACION DEL BLOG",
          ]}
        />
        <SpecialCard
          type={"Ecommerce"}
          price={25000}
          features={[
            "5 VISTAS",
            "HTTPS (Conexion segura)",
            "DOMINIO .com, .net, .dev, .ar",
            "HOSTING GRATUITO",
            "INTEGRACION CON MERCADOPAGO",
            "PANEL ADMIN PARA CONTROL DE STOCK/PEDIDOS",
            "REGISTRO DE USUARIOS",
            "CONTROL MENSUAL",
          ]}
        />
      </div>
    </div>
  );
};
