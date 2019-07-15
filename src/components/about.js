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
              Hello! My name is Vlad Dragos a TE3 graduate from Kinna, Sweden.
              Since a very young age I have had a very deeprooted passion for
              nearly anything tech related. I love tinkering with code and
              classical rock.
            </p>
          </div>
          <div className="about-text__container">
            <h2 className="about-text__title">Experience</h2>
            <p className="about-text__paragraph">
              I am mostly self taught, I like learning new technologies and
              learn new and better ways of coding. For this purpose i use online
              learning resources such as{" "}
              <a
                className="about__link"
                href="https://www.udemy.com/user/vlad-dragos-2/"
              >
                Udemy
              </a>
              ,{" "}
              <a
                className="about__link"
                href="https://teamtreehouse.com/vladdragos
"
              >
                Team Tree House
              </a>{" "}
              and{" "}
              <a
                className="about__link"
                href="https://www.codecademy.com/catalog/subject/all"
              >
                Codecademy
              </a>
              .
            </p>
          </div>
        </div>
        <Skills />
      </section>
    );
  }
}
