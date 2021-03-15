import React, { Fragment } from "react";
import Feature from "./Feature";

interface Props {
  features: string[];
  type: string;
  price: number;
}

const NormalCard = (props: Props) => {
  let number = 0;
  return (
    <Fragment>
      <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
        <div className="mb-6">
          <div className="flex items-center justify-between pb-6 mb-6 border-b">
            <div>
              <p className="text-sm font-bold tracking-wider uppercase">
                {props.type}
              </p>
              <p className="text-4xl font-extrabold">{props.price}$ARS</p>
            </div>
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
              <svg
                className="w-7 h-7 text-purple-400"
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
            </div>
          </div>
          <div>
            <p className="mb-2 font-bold tracking-wide">Features</p>
            <ul className="space-y-2">
              {props.features.map((feat) => (
                <Feature text={feat} key={number++} />
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-gray-700 focus:shadow-outline focus:outline-none">
            CONTACTAR
          </div>
          <p className="text-sm text-gray-600">
            Cuota mensual para mantenimiento/pago de servidores y mas.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default NormalCard;
