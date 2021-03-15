import React, { Fragment } from "react";

interface Props {
  text: string;
}

const Feature = (props: Props) => {
  return (
    <Fragment>
      <li className="flex items-center">
        <div className="mr-2">
          <svg
            className="w-4 h-4 text-purple-400"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeWidth="2"
          >
            <polyline
              fill="none"
              stroke="currentColor"
              points="6,12 10,16 18,8"
            />
            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
          </svg>
        </div>
        <p className="font-medium text-gray-800">{props.text}</p>
      </li>
    </Fragment>
  );
};

export default Feature;
