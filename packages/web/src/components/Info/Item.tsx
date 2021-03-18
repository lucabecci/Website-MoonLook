import React, { Fragment } from "react";

interface Props {
  title: string;
  item1: string;
  item2: string;
  item3: string;
}

const Item = (props: Props) => {
  return (
    <Fragment>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
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
              <path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805"></path>
              <circle cx="12" cy="12" r="7"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">
              {props.title}
            </h2>
            <ul className="leading-relaxed text-base">
              <li>
                <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {props.item1}
              </li>
              <li>
                <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {props.item2}
              </li>
              <li>
                <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {props.item3}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Item;
