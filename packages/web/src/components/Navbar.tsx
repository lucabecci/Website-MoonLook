/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
const Navbar: React.FC = () => {
    const history = useHistory();
    const [toggle, setToggle] = useState("hidden");
    const changeToggle = (e: any) => {
        e.preventDefault();
        if (toggle === "") {
            setToggle("hidden");
            return;
        }
        setToggle("");
    };
    return (
        <Fragment>
            <nav className="p-1 relative select-none bg-white lg:flex lg:items-stretch w-full">
                <div className="flex flex-no-shrink items-stretch h-12">
                    <h2
                        className="text-gray-900 font-sans text-1.5xl font-extrabold flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:font-bold transition duration-300 hover:text-blue-600"
                        onClick={() => history.push("/")}
                    >
                        <svg
                            className="w-5 h-5 text-gray-900 mr-2"
                            strokeLinecap="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                cx="11"
                                cy="13"
                                fill="none"
                                r="9"
                                stroke="currentColor"
                            />
                            <path
                                d=" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047"
                                stroke="currentColor"
                                fill="none"
                            />
                        </svg>
                        MOONLOOK
                    </h2>
                    <button
                        onClick={(e) => changeToggle(e)}
                        className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4"
                    >
                        {toggle === "hidden" ? (
                            <svg
                                className="fill-current text-gray-900"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        ) : (
                            <svg
                                className="fill-current text-gray-900"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                            </svg>
                        )}
                    </button>
                </div>
                <div
                    className={`lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ${toggle}`}
                >
                    <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                        <p
                            className="font-medium text-gray-900 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-300 hover:text-blue-600"
                            onClick={() => history.push("/precios")}
                        >
                            PRECIOS
                        </p>
                        <p
                            className="font-medium text-gray-900 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-300 hover:text-blue-600"
                            onClick={() => history.push("/nosotros")}
                        >
                            NOSOTROS
                        </p>
                        <p
                            className="font-medium text-gray-900 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center transition duration-300 hover:text-blue-600"
                            onClick={() => history.push("/contacto")}
                        >
                            CONTACTO
                        </p>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
