import React, { Component } from "react";
import { PortfolioItem } from "./portfolioItem";

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculator: {
        tags: [
          ["React", "SASS", "JavaScript"],
          ["React", "SASS", "Express.js", "mongodb"],
          ["PHP", "SASS", "JavaScript", "MySQL"]
        ],
        textBody: [
          [
            "A simple calculator app build with React and styled with SASS.",
            "The app makes use of the eval function that turns strings into javascript statements.",
            "Validation is implemented to avoid errors and stop malicious code from being run"
          ],
          ["WORK IN PROGRESS", "Schedule/Productivity app"],
          ["WORK IN PROGRESS", "Social Media App for cats"]
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
            tags={this.state.calculator.tags[0]}
            text={this.state.calculator.textBody[0]}
          />
          <PortfolioItem
            title="Routiner"
            enlargen=""
            url="/"
            tags={this.state.calculator.tags[1]}
            text={this.state.calculator.textBody[1]}
          />
          <PortfolioItem
            title="Catbook"
            enlargen=""
            url="http://www.catbook.se/"
            tags={this.state.calculator.tags[2]}
            text={this.state.calculator.textBody[2]}
          />
        </div>
      </div>
    );
  }
}
