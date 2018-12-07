import React, { Component } from "react";
import { PortfolioItem } from "./portfolioItem";

export class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__grid">
          <PortfolioItem
            title="React-Calculator"
            enlargen="enlarge"
            url="/React-Calculator"
          />
          <PortfolioItem title="fortum" enlargen="" url="/React-Calculator" />
          <PortfolioItem title="saab" enlargen="" url="/React-Calculator" />
        </div>
      </div>
    );
  }
}
