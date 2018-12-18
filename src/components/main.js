import React, { Component } from "react";
import Navbar from "./navbar";
import top from "../images/top.svg";
import smoothScroll from "../scripts/smoothScroll";
export class Main extends Component {
  scroll = () => {
    smoothScroll(".portfolio", 1000);
  };
  render() {
    return (
      <section className="hero">
        <Navbar />
        <img src={top} alt="" className="hero__image" />
        <div className="hero__container">
          <div className="hero__text-container">
            <h2 className="hero__header">VLAD DRAGOS</h2>
            <h3 className="hero__sub-header">
              Aspiring web developer Looking for part time job
            </h3>
            <a className=" hero__cta" onClick={this.scroll}>
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    );
  }
}
