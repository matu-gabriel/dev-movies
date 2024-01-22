import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  z-index: 999;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #000;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 30px;
  max-width: 1200px;

  button {
    cursor: pointer;
    color: #fff;
    border: none;
    background: transparent;
    margin: 5px;
    padding: 30px;
    position: absolute;
    top: -30px;
    left: -30px;
  }

  iframe {
    border: none;
  }
`;
