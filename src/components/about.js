import React, { Component } from "react";
import { Skills } from "./skills";
import bottom from "../images/bottom.svg";

export class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <img src={bottom} alt="" className="about-image" />
        <div className="about-text--container">
          <div className="about-text--container-text">
            <h2>About</h2>
            <p>
              Hello! My name is Vlad Dragos a TE3 student from Kinna, Sweden.
              Since a very young age I have had a very deeprooted passion for
              nearly anything tech related. I love tinkering with code and
              classical rock.
            </p>
          </div>
          <div className="about-text--container-text">
            <h2>Experience</h2>
            <p>
              Hello! My name is Vlad Dragos a TE3 student from Kinna, Sweden.
              Since a very young age I have had a very deeprooted passion for
              nearly anything tech related. I love tinkering with code and
              classical rock.
            </p>
          </div>
        </div>
        <Skills />
      </section>
    );
  }
}
