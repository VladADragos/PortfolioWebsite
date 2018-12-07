import React, { Component } from "react";
import { PortfolioItem } from "./portfolioItem";

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculator: {
        tags: ["React", "SASS", "JavaScript"],
        textBody: [
          "A simple calculator app build with React and styled with SASS.",
          "The app makes use of the eval function that turns strings into javascript statements.",
          "Validation is implemented to avoid errors and stop malicious from being run"
        ]
      }
    };
  }
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__grid">
          <PortfolioItem
            title="React-Calculator"
            enlargen="enlarge"
            url="/React-Calculator"
            tags={this.state.calculator.tags}
            text={this.state.calculator.textBody}
          />
          <PortfolioItem
            title="fortum"
            enlargen=""
            url="/React-Calculator"
            tags={this.state.calculator.tags}
            text={this.state.calculator.textBody}
          />
          <PortfolioItem
            title="saab"
            enlargen="e"
            url="/React-Calculator"
            tags={this.state.calculator.tags}
            text={this.state.calculator.textBody}
          />
        </div>
      </div>
    );
  }
}
