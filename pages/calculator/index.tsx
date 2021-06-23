import React, { Component, useState } from "react";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import Clear from "./components/Clear";
// import { BackButton } from "../BackButton";


type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default function Calculator() {
  const [input, setInput] = useState("");
  const isValidInput = (input: string | number): boolean => {
    if (
      typeof input === "number" && !isNaN(input) ||
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
  }

  const write = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let value = e.currentTarget.value;
    if (isValidInput(value)) {
      if (value === "=") {
        setInput(eval(input));
        // this.setState({ input: eval(this.state.input) });
      } else {
        setInput(input + value);
        // this.setState({ input: this.state.input + value });
        if (e !== undefined) {
          e.currentTarget.blur();
        }
      }
    }
  }

  const clear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setInput("");
    // this.setState({ input: "" });

    if (e !== undefined) {
      e.currentTarget.blur();
    }
  };


  const enter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>) => {
    try {
      if (input !== "") {
        // this.setState({ input: eval(this.state.input) });
        setInput(eval(input));
      }
      if (eval(input) === Infinity) {
        // this.setState({ input: "Can't divide by 0" });
        setInput("Can't divide by 0")
        setTimeout(clear, 2000);
      }
    } catch (err) {
      console.log(err);
      // this.setState({ input: "syntax error" });
      setInput("syntax error");
      setTimeout(clear, 2000);
    }
    if (e !== undefined) {
      e.currentTarget.blur();
    }
  };

  const change = (e: InputEvent) => {
    let string = e.target.value;
    let lastChar = string.substring(string.length - 1, string.length);
    if (isValidInput(lastChar)) {
      // this.setState({ input: string });
      setInput(string);
    }
  };

  const handleKeyboardEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      enter(e);
    }
  };

  return (
    <div className="calculator-container">
      {/* <BackButton /> */}
      <div className="calculator">
        <Input
          input={input}
          onChange={change}
          handleKeyboardEnter={handleKeyboardEnter}
        />
        <Buttons handleClick={write} handleEnter={enter} />
        <Clear handleClick={clear} />
      </div>
    </div>
  );;
}

