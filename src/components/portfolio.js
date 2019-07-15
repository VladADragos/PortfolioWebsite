import React, { Component } from "react";
import { PortfolioItem } from "./portfolioItem";

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // tags: [
    //   ["React", "SASS", "JavaScript"],
    //   ["React", "SASS", "Axios", "API"],
    //   ["PHP", "SASS", "JavaScript", "MySQL"]
    // ],
    // textBody: [
    //   [
    //     "A simple calculator app build with React and styled with SASS.",
    //     "The app makes use of the eval function that turns strings into javascript statements.",
    //     "Validation is implemented to avoid errors and stop malicious code from being run"
    //   ],
    //   ["WORK IN PROGRESS", "Schedule/Productivity app"],
    //   [
    //     "Semy finished(working version 1.0)",
    //     "Social media app for cats",
    //     "User creation,edit & delete. Login & logout",
    //     "Password encryption",
    //     "Validation on all the things"
    //   ]
    // ]
    // };

    this.state = {
      portfolio: [
        {
          title: "React-Calculator",
          url: "/React-Calculator",
          isLive: true,
          tags: ["React", "JavaScript"],
          enlargen: "enlarge",
          text: [
            "A simple calculator app build with React and styled with SASS.",
            "The app makes use of the eval function that turns strings into javascript statements.",
            "Validation is implemented to avoid errors and stop malicious code from being run"
          ]
        },
        {
          title: "Catbook",
          url: "/http://www.catbook.se/",
          isLive: true,
          tags: ["PHP", "JavaScript", "CSS", "SQL"],
          enlargen: "",
          text: [
            "WORK IN PROGRESS",
            "Semy finished(working version 1.0)",
            "Social media app for cats",
            "User creation,edit & delete. Login & logout",
            "Password encryption",
            "Validation on all the things"
          ]
        },
        {
          title: "Openstocks",
          url: "/http://www.openstocks.se/",
          isLive: false,
          tags: ["React", "Node", "Express", "TS", "Charts"],
          enlargen: "",
          text: [
            "WORK IN PROGRESS",
            "Partially working",
            "Fetches api data through an express server to avoid cors errors and hide api keys",
            "Data displayed in chart and table form"
          ]
        }
      ]
    };
  }

  enlarge = e => {
    let title = e.currentTarget.id;
    this.state.portfolio.map(portfolioItem => {
      if (
        portfolioItem.enlargen === "enlarge" &&
        portfolioItem.title !== title
      ) {
        portfolioItem.enlargen = "";
        console.log("made smaller");
      } else if (portfolioItem.title === title) {
        portfolioItem.enlargen = "enlarge";
        console.log("made biggwe");
      }
    });
    this.setState({ portfolio: this.state.portfolio });
  };
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__grid">
          {this.state.portfolio.map(portfolioItem => {
            return (
              <PortfolioItem
                key={portfolioItem.url}
                portfolioItemData={portfolioItem}
                enlarge={this.enlarge}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
