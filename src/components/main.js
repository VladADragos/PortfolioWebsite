import React, { Component } from "react";
import Navbar from "./navbar";
import top from "../images/top.svg";
export class Main extends Component {
  render() {
    return (
      <section className="main">
        <Navbar />
        <img src={top} alt="" className="iceburg-image" />
        <div className="iceburg">
          <div className="iceburg-text">
            <h2>VLAD DRAGOS</h2>
            <h3>Aspiring web developer Looking for part time job</h3>
            <a href="./" className="button button-cta">
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    );
  }
}
