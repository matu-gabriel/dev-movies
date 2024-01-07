import React from "react";
import { ButtonRed, ButtonWhite } from "./style";

const Button = ({ children, red }) => {
  return (
    <>
      {red ? (
        <ButtonRed>{children}</ButtonRed>
      ) : (
        <ButtonWhite>{children}</ButtonWhite>
      )}
    </>
  );
};

export default Button;
