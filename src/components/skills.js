import React, { Component } from "react";
import { Tag } from './tag';
export class Skills extends Component {
  render() {
    return (
      <div className="about-skills">
        <div className="about-skills-text">
          <h2>Skills</h2>

          <div className="skills-grid">
            <div className="item mastered">
              <h3>Excellent</h3>
              <div className="skills-tags">
                <Tag icon="fab fa-html5" text="HTML5" color="#ED511F"/>
                <Tag icon="fab fa-css3-alt" text="CSS3" color="#0063B1"/>
                <Tag icon="fab fa-js-square" text="JavaScript" color="#F6D854"/>
                
              </div>
            </div>

            <div className="item good">
              <h3>Good</h3>
              <div className="skills-tags">
              <Tag icon="fab fa-react" text="React" color="#61dafb"/>
              <Tag icon="fab fa-php" text="PHP" color="#52628F"/>
              <Tag icon="fab fa-sass" text="SASS" color="#CF649A"/>
              </div>
            </div>

            <div className="item learning">
              <h3>Learning</h3>
              <div className="skills-tags">
              <Tag icon="fas fa-database" text="Python" color="#f49542"/>
              <Tag icon="fab fa-node-js" text="Node.js" color="#8BBF3D"/>
              <Tag icon="fab fa-python" text="Python" color="#FFE76F"/>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
