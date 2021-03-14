import React, { Fragment, useState } from "react";
import StepsCard from "./StepsCard";

interface Props {}

const Steps = (props: Props) => {
  const selected =
    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t";

  const unselected =
    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider";

  const [first, setFirst] = useState<string>(selected);
  const [second, setSecond] = useState<string>(unselected);
  const [third, setThird] = useState<string>(unselected);
  const [four, setFour] = useState<string>(unselected);

  const changeSelected = (e:any, n: number) => {
    e.preventDefault()
    switch (n) {
      case 1:
        setFirst(selected);
        setSecond(unselected);
        setThird(unselected);
        setFour(unselected);
        break;
      case 2:
        setFirst(unselected);
        setSecond(selected);
        setThird(unselected);
        setFour(unselected);
        break;
      case 3:
        setFirst(unselected);
        setSecond(unselected);
        setThird(selected);
        setFour(unselected);
        break;
      case 4:
        setFirst(unselected);
        setSecond(unselected);
        setThird(unselected);
        setFour(selected);
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <section className="text-gray-600 body-font pb-10">
        <div className="container px-5 pt-10 pb-2 mx-auto">
          <div className="text-center mb-2">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4 text-gray-900">
              PASOS
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Estos son los pasos a realizar:
            </p>
          </div>
        </div>
        <div className="container px-5 py-6 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20">
            <div className={first} onClick={(e) => changeSelected(e, 1)}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              STEP 1
            </div>
            <div className={second} onClick={(e) => changeSelected(e, 2)}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              STEP 2
            </div>
            <div className={third} onClick={(e) => changeSelected(e, 3)}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
              STEP 3
            </div>
            <div className={four} onClick={(e) => changeSelected(e, 4)}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              STEP 4
            </div>
          </div>
          <StepsCard 
            first={first}
            second={second}
            third={third}
            four={four}
            selected={selected}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Steps;
