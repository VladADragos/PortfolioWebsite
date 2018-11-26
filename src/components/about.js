import React, { Component } from "react";
import { Skills } from "./skills";
import bottom from "../images/bottom.svg";

export class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <img src={bottom} alt="" className="about__image" />
        <div className="about-text">
          <div className="about-text__container">
            <h2 className="about-text__title">About</h2>
            <p className="about-text__paragraph">
              Hello! My name is Vlad Dragos a TE3 student from Kinna, Sweden.
              Since a very young age I have had a very deeprooted passion for
              nearly anything tech related. I love tinkering with code and
              classical rock.
            </p>
          </div>
          <div className="about-text__container">
            <h2 className="about-text__title">Experience</h2>
            <p className="about-text__paragraph">
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
