import React, { FC, useContext } from "react";
import styled from "styled-components";
import { GameOfLifeContext } from "../GameOfLifeContext";

const StartGameButtonStyles = styled.button`
  background: white;
  border: 2px solid black;
  padding: 10px 15px;
  font-family: monospace;
  font-weight: bold;
`;

export const StartGameButton: FC = () => {
  const { isRunning, startGame } = useContext(GameOfLifeContext);

  return (
    <StartGameButtonStyles onClick={startGame} disabled={isRunning}>
      {isRunning ? "In progress..." : "Start game"}
    </StartGameButtonStyles>
  );
};
