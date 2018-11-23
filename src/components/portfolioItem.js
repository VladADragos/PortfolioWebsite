import React, { Component } from "react";
import enlarge from "./../scripts/enlarge";
export class PortfolioItem extends Component {
  
  render() {

    
    return (
      <div className={`item ${this.props.enlargen}`}  onClick={enlarge}>
        
          
    <img className="item--image" src={require(`../images/${this.props.title}.png`)} alt="" />
        
        <div className="item--info">
        <div className="item--info__text">
        <h2>{this.props.title}</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, accusamus!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, veritatis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quis?</p>
        </div>
        <div className="item--info__tags">
        <div className="main-buttons">
        <button type="button" href="./" className="tag-button btn">
            View Demo
          </button>
          <button className="tag-button github-button">
            Github
          </button>
        </div>
          <div className="tags">
          <p>
            React
          </p>
          <p>
            NodeJS
          </p>
          <p>
            Firebase
          </p>
          </div>
        </div>
          
        </div>
        <p className="view-button">VIEW</p>
      </div>
    );
  }
}
