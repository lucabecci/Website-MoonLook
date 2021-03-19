import React, { Fragment } from "react";

interface Props {}

const Design = (props: Props) => {
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
        <polyline points="6 21 21 6 18 3 3 18 6 21"></polyline>
        <line x1="15" y1="6" x2="18" y2="9"></line>
        <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
        <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
      </svg>
    </Fragment>
  );
};

export default Design;
