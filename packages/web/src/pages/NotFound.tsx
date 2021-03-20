/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment } from "react";

interface Props {}

const NotFound = (props: Props) => {
    return (
        <Fragment>
            <h1>Error 404</h1>
        </Fragment>
    );
};

export default NotFound;
