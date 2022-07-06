import React from "react";
import "../../styles/btn.css";

const STYLES = [
  "btn--primary--solid",
  "btn--yellow--solid",
  "btn--primary--outline",
  "btn--yellow--outline",
];

const SIZES = ["btn--large", "btn--medium", "btn--small"];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  disabled,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn flex items-center justify-center cursor-pointer ${checkButtonStyle} ${checkButtonSize} ${
        checkButtonStyle === "btn--primary--solid"
          ? "transition duration-300 ease-in-out  animate-bounce"
          : ""
      }
      ${disabled ? "disabled:cursor-not-allowed" : "cursor-pointer"}
      `}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
