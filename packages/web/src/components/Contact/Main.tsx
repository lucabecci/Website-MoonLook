/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment } from "react";
import Form from "./Form";

interface Props {}

const Main = (props: Props) => {
    return (
        <Fragment>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                            Quieres comunicarte con nosotros?
                        </h1>
                        <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">
                            Por favor elige bien tu opcion a desarrollar y llena
                            tus datos bien para que podamos comunicarnos
                            contigo. Una vez que nosotros recibamos el mensaje
                            nos comunicaremos contigo para proceder al paso 1.
                        </p>
                    </div>
                    <Form />
                </div>
            </section>
        </Fragment>
    );
};

export default Main;
