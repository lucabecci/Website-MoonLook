import React, { Fragment } from "react";

interface Props {}

const Money = (props: Props) => {
    return (
        <Fragment>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="7" y="9" width="14" height="10" rx="2"></rect>
                <circle cx="14" cy="14" r="2"></circle>
                <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"></path>
            </svg>
        </Fragment>
    );
};

export default Money;
