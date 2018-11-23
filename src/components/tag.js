import React, { Component } from "react";
export class Tag extends Component {
  render() {
      let color = {color: this.props.color}
    return (
        <div className={`tag`} style={color}>
        <i className={this.props.icon} />
          <h4>{this.props.text}</h4>
        </div>
    );
  }
}
