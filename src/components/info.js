import React, { Component } from "react";

export class Info extends Component {
  render() {
    return (
      <div className="info">
        <div className="info-item">
          
          <p> 
            <a 
            href="tel:0705172459">
              linkedin
              </a>
          </p>
          <i className="fab fa-linkedin-in" />
        </div>
        <div className="info-item">
          
          <p> 
            <a 
            href="https://github.com/VladADragos">
              Github
              </a>
          </p>
          <i className="fab fa-github" />
        </div>
        <div className="info-item">
          
          <p> 
            <a 
            href="tel:0705172459">
              (+46) 0705172459
              </a>
          </p>
          <i className="fas fa-mobile-alt" />
        </div>
        <div className="info-item">
          
          <p> 
            <a 
            href="mailto:vladinatorr@gmail.com">
              vladinatorr@gmail.com
            </a>
          </p>
          <i className="fas fa-envelope" />
        </div>
        <div className="info-item">
         
          <p>Vlad Alexandru Dragos 2018</p>
          <i className="fas fa-copyright" />
        </div>
        
      </div>
    );
  }
}
