import React, { Component } from "react";
import { PortfolioItem } from "./portfolioItem";

export class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        
        <div className="grid">
          <PortfolioItem title="försvars-makten" enlargen="enlarge"/>
          <PortfolioItem title="fortum" enlargen=""/>
          <PortfolioItem title="saab" enlargen=""/>
        </div>
      </div>
    );
  }
}
