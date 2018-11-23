import React, { Component } from "react";
import whale from "../images/whale-flat.svg";
export class PortfolioHeader extends Component {
  render() {
    return (
      <div className="portfolio-header" id="porfolio">
        <img src={whale} alt="" className="whale" />
        
        <div className="portfolio-header-title">
        <h2>Portfolio</h2>
        <p className="disclaimer">
          *All projects make use of JavaScript, SASS and BEM naming methodology
        </p>
        </div>
      </div>
    );
  }
}
