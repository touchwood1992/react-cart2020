import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import CartState from "./contexts/Cart/CartState";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <CartState>
        <ToastContainer />

        <div id="site-container" className="d-flex flex-column">
          <Header />
          <main id="site-content">
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/about" render={() => <About />} />
            </Switch>
          </main>
          <Footer />
        </div>
      </CartState>
    </Router>
  );
};
export default App;
