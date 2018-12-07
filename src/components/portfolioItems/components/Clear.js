import React, { Component } from "react";

export class Clear extends Component {
  render() {
    return (
      <button className="clear" onClick={this.props.handleClick}>
        Clear
      </button>
    );
  }
}
