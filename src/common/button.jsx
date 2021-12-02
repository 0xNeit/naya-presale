import React from "react";
import "../css/button.css";

const Button = (props) => {
  const { content, buttonStyles, onClick } = props;
  return (
    <button
      type="button"
      className="btn ms-2 button"
      style={buttonStyles}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
