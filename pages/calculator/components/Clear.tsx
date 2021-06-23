import React, { Component } from "react";

interface ClearProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function Clear({ handleClick }: ClearProps) {
  return (
    <button className="clear" onClick={handleClick}>
      Clear
    </button>
  );
}

