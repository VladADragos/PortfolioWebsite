import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <input
        className="input"
        type="text"
        value={this.props.input}
        onChange={this.props.onChange}
        onKeyPress={this.props.handleKeyboardEnter}
      />
    );
  }
}
