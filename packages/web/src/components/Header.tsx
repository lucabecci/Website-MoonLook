import React from "react";

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="relative flex flex-col py-8 lg:pt-0 lg:flex-col lg:pb-0 mb-10">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Bienvenidos a MOONLOOK
              <br className="hidden md:block" />
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Un lugar donde todas tus ideas pueden ser digitalizadas y tu empresa puede llegar a nuevos niveles.
              Logramos un excelente producto a un precio accesible y que cumpla con todos tus criterios. 
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-indigo-600 hover:bg-indigo-900 focus:shadow-outline focus:outline-none"
            >
              Mas informacion
            </a>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
