import React from "react";

const Button = ({ children, sum }) => {
  return (
    <button
      className="border-black border-2 rounded-full w-10 flex items-center justify-center"
      onClick={sum}
    >
      {children}
    </button>
  );
};

export default Button;
