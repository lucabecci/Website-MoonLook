/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Fragment, ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Price from "./pages/Price";

const App: React.FC = (): ReactElement => {
    return (
        <Fragment>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/precios" component={Price} />
                    <Route path="/nosotros" component={Company} />
                    <Route path="/contacto" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </Fragment>
    );
};
export default App;
