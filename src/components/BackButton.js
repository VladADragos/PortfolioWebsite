import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class BackButton extends Component {
  render() {
    return (
      <NavLink to="/" className="back-button">
        Back
      </NavLink>
    );
  }
}
