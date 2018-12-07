import React, { Component } from "react";
import enlarge from "./../scripts/enlarge";
import { NavLink } from "react-router-dom";
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
            <p className="portfolio-item__paragraph"> {this.props.text[0]}</p>
            <p className="portfolio-item__paragraph"> {this.props.text[1]}</p>
            <p className="portfolio-item__paragraph"> {this.props.text[2]}</p>
          </div>
          <div className="portfolio-item__buttons-container">
            <div className="portfolio-item__links-container">
              <NavLink to={this.props.url} className="portfolio-item__button">
                View Demo
              </NavLink>
              <a
                href={`https://github.com/VladADragos${this.props.url}`}
                className="portfolio-item__button portfolio-item__button--github"
              >
                Github
              </a>
            </div>
            <div className="portfolio-item__tags-container">
              <p className="portfolio-item__tag">{this.props.tags[0]}</p>
              <p className="portfolio-item__tag">{this.props.tags[1]}</p>
              <p className="portfolio-item__tag">{this.props.tags[2]}</p>
            </div>
          </div>
        </div>
        <p className="view-button">VIEW</p>
      </div>
    );
  }
}
