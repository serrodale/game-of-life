import * as React from "react";
import { Grid } from "./Grid";
import { createGlobalStyle } from "styled-components";
import { useGameOfLife } from "../useGameOfLife";
import { StartGameButton } from "./StartGameButton";
import { GameOfLifeContext } from "../GameOfLifeContext";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

export const App: React.FC = () => {
  const gameOfLife = useGameOfLife();

  return (
    <>
      <GlobalStyle />

      <GameOfLifeContext.Provider value={gameOfLife}>
        <StartGameButton />
        <Grid />
      </GameOfLifeContext.Provider>
    </>
  );
};
