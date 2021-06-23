import React, { Component } from "react";
interface InputPorps {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyboardEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({ input, onChange, handleKeyboardEnter }: InputPorps) {
  return (
    <input
      className="input"
      type="text"
      value={input}
      onChange={onChange}
      onKeyPress={handleKeyboardEnter}
    />
  );
}

