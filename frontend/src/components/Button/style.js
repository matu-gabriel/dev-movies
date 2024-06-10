import styled from "styled-components";

const buttonStyle = styled.button`
  border: 3px solid #fff;
  background: transparent;
  color: #fff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  transition: 0.4s ease-in-out;

  &:hover {
    color: #ff0000;
    background: #fff;
  }
`;

export const ButtonRed = styled(buttonStyle)`
  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgb(0 255 0 / 30%);
    background: #189b20;
    color: #fff;
  }
`;

export const ButtonWhite = styled(buttonStyle)``;
