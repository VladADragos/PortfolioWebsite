import React, { Component } from "react";
import enlarge from "./../scripts/enlarge";
export class PortfolioItem extends Component {
  render() {
    return (
      <div
        className={`portfolio-item ${this.props.enlargen}`}
        onClick={enlarge}
      >
        <img
          className="portfolio-item__image"
          src={require(`../images/${this.props.title}.png`)}
          alt=""
        />
        <div className="portfolio-item__info-container">
          <div className="portfolio-item___text-container">
            <h2 className="portfolio-item__title">{this.props.title}</h2>
            <p className="portfolio-item__paragraph">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              accusamus!
            </p>
            <p className="portfolio-item__paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              veritatis?
            </p>
            <p className="portfolio-item__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              quis?
            </p>
          </div>
          <div className="portfolio-item__buttons-container">
            <div className="portfolio-item__links-container">
              <a href="./" className="portfolio-item__button">
                View Demo
              </a>
              <a className="portfolio-item__button portfolio-item__button--github">
                Github
              </a>
            </div>
            <div className="portfolio-item__tags-container">
              <p className="portfolio-item__tag">React</p>
              <p className="portfolio-item__tag">NodeJS</p>
              <p className="portfolio-item__tag">Firebase</p>
            </div>
          </div>
        </div>
        <p className="view-button">VIEW</p>
      </div>
    );
  }
}
