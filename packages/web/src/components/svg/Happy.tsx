import React, { Fragment } from "react";

interface Props {}

const Happy = (props: Props) => {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="12" r="9"></circle>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
        <path d="M8 13a4 4 0 1 0 8 0m0 0h-8"></path>
      </svg>
    </Fragment>
  );
};

export default Happy;
