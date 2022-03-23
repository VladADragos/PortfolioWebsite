import React from "react";
import WithClasses from "../utils/withClasses";

type Props = {
  children: React.ReactNode;
  type: "primary" | "secondary" | "tertiary";
};
const Button: React.FC<Props> = ({ children, type }) => {
  switch (type) {
    case "primary":
      return (
        <button
          className={`button  bg-brand-orange-medium hover:bg-brand-orange-light`}
        >
          {children}
        </button>
      );
    case "secondary":
      return (
        <button
          className={`button bg-brand-blue-medium hover:bg-brand-blue-light `}
        >
          {children}
        </button>
      );
    case "tertiary":
      return (
        <button
          className={`bg-none font-bold text-slate-600 px-5 py-2 border-2 rounded-lg border-brand-blue-medium hover:text-slate-50 hover:bg-brand-blue-medium hover:rounded-lg hover:scale-110 transition-scale  duration-300 ease-out`}
        >
          {children}
        </button>
      );
  }
};

export default Button;
