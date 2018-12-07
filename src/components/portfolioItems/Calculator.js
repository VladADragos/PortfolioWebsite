import React, { Component } from "react";
import { Buttons } from "./components/Buttons";
import { Input } from "./components/Input";
import { Clear } from "./components/Clear";
export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  isValidInput = input => {
    if (
      !isNaN(input) ||
      input === "/" ||
      input === "*" ||
      input === "+" ||
      input === "-" ||
      input === "."
    ) {
      //console.log("Is Valid");
      return true;
    } else {
      //console.log("Is Not Valid");
      return false;
    }
  };

  write = e => {
    let value = e.target.value;
    if (this.isValidInput(value)) {
      if (value === "=") {
        this.setState({ input: eval(this.state.input) });
      } else {
        this.setState({ input: this.state.input + value });
        if (e !== undefined) {
          e.target.blur();
        }
      }
    }
  };
  clear = e => {
    this.setState({ input: "" });

    if (e !== undefined) {
      e.target.blur();
    }
  };
  enter = e => {
    try {
      if (this.state.input !== "") {
        this.setState({ input: eval(this.state.input) });
      }
      if (eval(this.state.input) === Infinity) {
        this.setState({ input: "Can't divide by 0" });
        setTimeout(this.clear, 2000);
      }
    } catch (err) {
      console.log(err);
      this.setState({ input: "syntax error" });
      setTimeout(this.clear, 2000);
    }
    if (e !== undefined) {
      e.target.blur();
    }
  };
  change = event => {
    let string = event.target.value;
    let lastChar = string.substring(string.length - 1, string.length);
    if (this.isValidInput(lastChar)) {
      this.setState({ input: string });
    }
  };

  handleKeyboardEnter = event => {
    if (event.key === "Enter") {
      this.enter(event);
    }
  };
  render() {
    return (
      <div className="calculator-container">
        <div className="calculator">
          <Input
            input={this.state.input}
            onChange={this.change}
            handleKeyboardEnter={this.handleKeyboardEnter}
          />
          <Buttons handleClick={this.write} handleEnter={this.enter} />
          <Clear handleClick={this.clear} />
        </div>
      </div>
    );
  }
}
