import React, { Component } from "react";
import { InfoItem } from "./info-item";
export class Info extends Component {
  render() {
    return (
      <div className="contact-info">
        {/* <InfoItem link="./" text="linkedin" icon="fab fa-linkedin-in" /> */}
        <InfoItem
          link="https://github.com/VladADragos"
          text="Github"
          icon="fab fa-github"
        />
        <InfoItem
          link="tel:0705172459"
          text="(+46) 0705172459"
          icon="fas fa-mobile-alt"
        />
        <InfoItem
          link="mailto:vladinatorr@gmail.com"
          text="vladinatorr@gmail.com"
          icon="fas fa-envelope"
        />
        <InfoItem text="Vlad Alexandru Dragos 2018" icon="fas fa-copyright" />
      </div>
    );
  }
}
