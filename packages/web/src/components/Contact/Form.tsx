import React, { Fragment } from "react";

interface Props {}

const Form = (props: Props) => {
    return (
        <Fragment>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label
                                htmlFor="name"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label
                                htmlFor="email"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Apellido
                            </label>
                            <input
                                type="text"
                                name="apellido"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                        </div>
                    </div>

                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label
                                htmlFor="name"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label
                                htmlFor="name"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Numero
                            </label>
                            <input
                                type="number"
                                name="number"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label
                                htmlFor="choose"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Proyecto
                            </label>
                            <select className="w-full border bg-white rounded px-3 py-2 outline-none">
                                <option className="py-1">Landing Page</option>
                                <option className="py-1">
                                    Landing Page Plus
                                </option>
                                <option className="py-1">Blog</option>
                                <option className="py-1">E-Commerce</option>
                                <option className="py-1">
                                    Sistema Emp/Edu
                                </option>
                                <option className="py-1">Backend</option>
                                <option className="py-1">
                                    Microservicios Backend
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label
                                htmlFor="description"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Descripcion
                            </label>
                            <textarea
                                name="description"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Enviar
                        </button>
                    </div>
                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                        <a
                            href="https://google.com"
                            target="blank"
                            className="text-indigo-500"
                        >
                            moonlookOK@gmail.com
                        </a>
                        <p className="leading-normal my-5">
                            Buenos Aires, Argentina.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Form;
