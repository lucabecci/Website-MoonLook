/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Fragment } from "react";
import Features from "./Features";

const Main = () => {
    return (
        <Fragment>
            <section className="pt-8 pb-10">
                <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
                    <div className="flex flex-wrap -mx-8">
                        <div className="w-full lg:w-1/2 px-8">
                            <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-semibold text-gray-800 font-heading dark:text-white">
                                    Te contamos un poco de nostros!
                                </h2>
                                <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                                    Somos una empresa dedicada a la venta de
                                    sistemas y a la creacion de proyectos
                                    open-source, donde tratamos de resolver o
                                    agilizar problemas existentes para que las
                                    personas puedan utilizarlo. Nos gusta
                                    trabajar con sistemas complejos. Actualmente
                                    trabajamos con las ultimas tecnologias del
                                    mercado, como react, next, graphql,
                                    microservicios con diferentes lenaguajes
                                    para mayor escalabilidad y mucho mas.
                                </p>
                                <div className="w-full md:w-1/3">
                                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                                        <div className="text-gray-400">
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-3 text-gray-400">
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-3 text-gray-400">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    x="2"
                                                    y="2"
                                                    rx="5"
                                                    ry="5"
                                                ></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-3 text-gray-400">
                                            <svg
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="0"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                                ></path>
                                                <circle
                                                    cx="4"
                                                    cy="4"
                                                    r="2"
                                                    stroke="none"
                                                ></circle>
                                            </svg>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Features />
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Main;
