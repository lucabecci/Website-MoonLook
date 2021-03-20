/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment } from "react";
import Header from "../components/Header";
import Info from "../components/Info/Info";
import Steps from "../components/Steps/Steps";

interface Props {}

const Home: React.FC = (props: Props) => {
    return (
        <Fragment>
            <Header />
            <Info />
            <Steps />
        </Fragment>
    );
};

export default Home;
