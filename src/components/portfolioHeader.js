import React, { Component } from "react";
import whale from "../images/whale-flat.svg";
export class PortfolioHeader extends Component {
  render() {
    return (
      <div className="portfolio-header" id="porfolio">
        <img src={whale} alt="" className="portfolio-header__image" />

        <div className="portfolio-header__title-container">
          <h2 className="portfolio-header__title">Portfolioo</h2>
        </div>
      </div>
    );
  }
}
