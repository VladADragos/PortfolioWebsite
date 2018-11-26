import React, { Component } from "react";
export class Skill extends Component {
  render() {
    let color = { color: this.props.color };
    return (
      <div className="skill" style={color}>
        <i className={`${this.props.icon} skill__icon`} />
        <h4 className="skill__text">{this.props.text}</h4>
      </div>
    );
  }
}
