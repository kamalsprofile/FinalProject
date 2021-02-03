import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Home} />
        <Route path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;