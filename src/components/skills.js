import React, { Component } from "react";
import { Skill } from "./Skill";
export class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2 className="skills__title">Skills</h2>

        <div className="skills-grid">
          <div className="skills-item skills-item--mastered">
            <h3 className="skills-item__title">Excellent</h3>
            <div className="skills-section">
              <Skill icon="fab fa-html5" text="HTML5" color="#ED511F" />
              <Skill icon="fab fa-css3-alt" text="CSS3" color="#0063B1" />
              <Skill
                icon="fab fa-js-square"
                text="JavaScript"
                color="#F6D854"
              />
            </div>
          </div>

          <div className="skills-item skills-item--good">
            <h3 className="skills-item__title">Good</h3>
            <div className="skills-section">
              <Skill icon="fab fa-react" text="React" color="#61dafb" />
              <Skill icon="fab fa-php" text="PHP" color="#52628F" />
              <Skill icon="fab fa-sass" text="SASS" color="#CF649A" />
            </div>
          </div>

          <div className="skills-item skills-item--learning">
            <h3 className="skills-item__title">Learning</h3>
            <div className="skills-section">
              <Skill icon="fas fa-database" text="Python" color="#f49542" />
              <Skill icon="fab fa-node-js" text="Node.js" color="#8BBF3D" />
              <Skill icon="fab fa-python" text="Python" color="#FFE76F" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
