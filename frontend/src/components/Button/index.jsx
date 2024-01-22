import React from "react";
import { ButtonRed, ButtonWhite } from "./style";

const Button = ({ children, red, ...props }) => {
  return (
    <>
      {red ? (
        <ButtonRed {...props}>{children}</ButtonRed>
      ) : (
        <ButtonWhite {...props}>{children}</ButtonWhite>
      )}
    </>
  );
};

export default Button;
