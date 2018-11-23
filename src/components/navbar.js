import React, { Component } from "react";
import logo from "../images/logo.svg";

import smoothScroll from "./../scripts/smoothScroll";

class Navbar extends Component {
  render() {
    const handleScroll = e => {
      e.preventDefault();

      // (e.currentTarget.className, 1000);
      let target = `.${e.currentTarget.className.slice(
        4,
        e.currentTarget.className.length
      )}`;
      smoothScroll(target, 1200);
    };
    return (
      <div className="navbar">
        <header>
          <a href="./">
            <img src={logo} alt="" width="60%" />
          </a>
        </header>
        <label htmlFor="mobile-menu" className="mobile-menu-label">
          <i className="fas fa-bars" />
        </label>
        <input
          type="checkbox"
          name="mobile-menu"
          id="mobile-menu"
          className="mobile-menu"
        />
        <nav>
          <a href="./">
            <h2>HOME</h2>
          </a>
          <a className="nav-portfolio" onClick={handleScroll}>
            <h2>PORTFOLIO</h2>
          </a>
          <a className="nav-about" onClick={handleScroll}>
            <h2>ABOUT</h2>
          </a>
          <a className="nav-contact" onClick={handleScroll}>
            <h2>CONTACT</h2>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
