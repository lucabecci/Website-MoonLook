import { Fragment, useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import ImageContext from "./context/images/ImagesContext";
import Company from "./pages/Company";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Price from "./pages/Price";

function App() {
  const imageContext = useContext(ImageContext);
  useEffect(() => {
    imageContext.getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/precios" component={Price} />
          <Route path="/nosotros" component={Company} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
