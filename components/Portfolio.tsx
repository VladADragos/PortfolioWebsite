import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const initialState = [
    {
      title: "Routiner",
      url: "http://routiner.se",
      isLive: true,
      tags: ["React", "SASS", "Node.js", "REST", "API"],
      enlargen: "",
      text: [
        "Productivity / Schedule app",
        "User authentication system, password encryption using bcrypt and",
        "temporary credentials storage using JWT & localstorage",
        "React is used for the front and sass is used for the styling",
        "Express is used for the rest backend api",
        "Error management system"
      ]
    },
    {
      title: "Catbook",
      url: "http://www.catbook.se/",
      isLive: true,
      tags: ["PHP", "JavaScript", "CSS", "SQL"],
      enlargen: "enlarge",
      text: [
        "Semy finished(working version 1.0)",
        "Social media app for cats",
        "User creation,edit & delete. Login & logout",
        "Password encryption",
        "Validation on all the things"
      ]
    },
    {
      title: "Openstocks",
      url: "http://www.openstocks.se/",
      isLive: false,
      tags: ["React", "Node", "Express", "TS", "Charts"],
      enlargen: "",
      text: [
        "WORK IN PROGRESS",
        "Fetches api data through an express server to avoid cors errors and hide api keys",
        "Data displayed in chart and table form"
      ]
    }
  ];
  const [portfolio, setPortfolio] = useState(initialState);

  const enlarge = e => {
    const index = parseInt(e.currentTarget.id, 10);
    const first = portfolio[0];
    portfolio[0] = portfolio[index];
    portfolio[index] = first;

    setPortfolio([...portfolio]);
  };
  return (
    <div className='portfolio'>
      <div className='portfolio__grid'>
        {portfolio.map((portfolioItem, index) => {
          return (
            <PortfolioItem
              key={index}
              id={index}
              portfolioItemData={portfolioItem}
              enlarge={enlarge}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
