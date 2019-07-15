import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export class PortfolioItem extends Component {
  render() {
    let {
      title,
      url,
      isLive,
      tags,
      enlargen,
      text
    } = this.props.portfolioItemData;
    return (
      <div
        className={`portfolio-item ${enlargen}`}
        onClick={this.props.enlarge}
        id={title}
      >
        <img
          className="portfolio-item__image"
          src={require(`../images/${title}.png`)}
          alt=""
        />
        <div className="portfolio-item__info-container">
          <div className="portfolio-item___text-container">
            <h2 className="portfolio-item__title">{title}</h2>
            {text.map(p => {
              return (
                <p key={p} className="portfolio-item__paragraph">
                  {" "}
                  {p}
                </p>
              );
            })}
          </div>
          <div className="portfolio-item__buttons-container">
            <div className="portfolio-item__links-container">
              {isLive && (
                <a
                  href={url}
                  className="portfolio-item__button"
                  target="_blank"
                >
                  View Demo
                </a>
              )}
              <a
                target="_blank"
                href={`https://github.com/VladADragos/${title}`}
                className="portfolio-item__button portfolio-item__button--github"
              >
                Github
              </a>
            </div>
            <div className="portfolio-item__tags-container">
              {tags.map(tag => (
                <p key={tag} className="portfolio-item__tag">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <p className="view-button">VIEW</p>
      </div>
    );
  }
}
