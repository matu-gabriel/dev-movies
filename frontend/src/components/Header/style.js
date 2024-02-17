import styled from "styled-components";

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  padding: 10px 30px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.changeBackground ? "#000" : "transparent"};
  transition: background-color 1s ease-in-out;

  img {
    width: 25%;
  }
`;
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;
export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }

  input {
    padding: 8px;
    margin-right: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    border-radius: 10px;
    color: #ddd;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
  }

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:nth-child(-n + 3)&::after {
    content: "";
    height: 3px;
    width: ${(props) => (props.isActive ? "100%" : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:nth-child(-n + 3)&:hover::after {
    width: 100%;
  }
`;
