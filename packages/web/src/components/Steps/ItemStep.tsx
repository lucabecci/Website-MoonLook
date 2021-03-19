import React, { Fragment } from "react";
import Design from "../svg/Design";
import Happy from "../svg/Happy";
import Money from "../svg/Money";

interface Props {
  value: number;
  title: string;
  description: string;
}

const ItemStep = (props: Props) => {
  return (
    <Fragment>
      <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
          {props.value}
        </div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
            {props.value === 1 ? <Money /> : null}
            {props.value === 2 ? <Design /> : null}
            {props.value === 3 ? <Happy /> : null}
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
              {props.title}
            </h2>
            <p className="leading-relaxed">{props.description}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemStep;
