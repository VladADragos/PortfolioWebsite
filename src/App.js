import React, { Component } from "react";

import "./css/main.css";
import { Main } from "./components/main";
import { About } from "./components/about";
import { PortfolioHeader } from "./components/portfolioHeader";
import { Portfolio } from "./components/portfolio";
import { Footer } from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <div className="ocean">
          <About />
          <PortfolioHeader />
          <Portfolio />
          <Footer />
        </div>
      </div>
    );
  }
}
/*
 */
export default App;
