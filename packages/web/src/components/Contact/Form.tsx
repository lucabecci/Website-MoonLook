import React, { Fragment, useContext } from "react";
import { useForm } from "react-hook-form";
import ContactContext from "../../context/Contact/ContactContext";

interface Props {}

type inputs = {
    nombre: string;
    apellido: string;
    email: string;
    numero: string;
    choose: string;
    description: string;
};

const Form = (props: Props) => {
    const { register, handleSubmit, errors } = useForm<inputs>();
    const contactContext = useContext(ContactContext);
    const onSubmit = (data: any, e: any) => {
        e.preventDefault();
        contactContext.sendContact(data);
        console.log(data);
    };

    return (
        <Fragment>
            <form
                className="lg:w-1/2 md:w-2/3 mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label
                                htmlFor="nombre"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                ref={register({ required: true })}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                            {errors.nombre && (
                                <span>This field is required</span>
                            )}
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label
                                htmlFor="apellido"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Apellido
                            </label>
                            <input
                                type="text"
                                name="apellido"
                                ref={register({ required: true })}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                            {errors.apellido && (
                                <span>This field is required</span>
                            )}
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
                                ref={register({ required: true })}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                            {errors.email && (
                                <span>This field is required</span>
                            )}
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
                                name="numero"
                                ref={register({ required: true })}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                            {errors.numero && (
                                <span>This field is required</span>
                            )}
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
                            <select
                                className="w-full border bg-white rounded px-3 py-2 outline-none"
                                ref={register({ required: true })}
                                name="choose"
                            >
                                <option className="py-1" value="landing page">
                                    Landing Page
                                </option>
                                <option
                                    className="py-1"
                                    value="plus landing page"
                                >
                                    Landing Page Plus
                                </option>
                                <option className="py-1" value="blog">
                                    Blog
                                </option>
                                <option className="py-1" value="e-commerce">
                                    E-Commerce
                                </option>
                                <option
                                    className="py-1"
                                    value="sys. empresarial"
                                >
                                    Sistema Empresarial
                                </option>
                                <option
                                    className="py-1"
                                    value="sys. educacional"
                                >
                                    Sistema Educacional
                                </option>
                                <option className="py-1" value="backend">
                                    Backend
                                </option>
                                <option className="py-1" value="microservicios">
                                    Microservicios Backend
                                </option>
                            </select>
                            {errors.choose && (
                                <span>This field is required</span>
                            )}
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
                                ref={register({ required: true })}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                            {errors.description && (
                                <span>This field is required</span>
                            )}
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <button
                            className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            type="submit"
                        >
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
            </form>
        </Fragment>
    );
};

export default Form;
