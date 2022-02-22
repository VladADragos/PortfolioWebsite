import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/main.css";
import { Home } from "./components/pages/Home";

import { Calculator } from "./components/portfolioItems/Calculator";

function temp() {
  return <React.Fragment></React.Fragment>;
}
function ComponentThatDoesStuff() {
  return <div></div>;
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/zohoverify" component={temp} />
        <Route path="/React-Calculator" component={Calculator} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
