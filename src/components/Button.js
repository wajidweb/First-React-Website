import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];
const COLORS = ["primary", "blue", "red", "green"];

export const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize,
  buttonColor,
  onClick,
}) => {
  const CheckButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const CheckButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;
  const CheckButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${CheckButtonStyle} ${CheckButtonColor} ${CheckButtonSize}`}
    >
      {children}
    </button>
  );
};
