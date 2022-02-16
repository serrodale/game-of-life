import { useState } from "react";
import { CellState, Coordinates } from "./types";
import {
  generateCopyOfGrid,
  generateEmptyGrid,
  getStateOfGridAfterAnIteration,
} from "./utils";
import {
  MILLISECONDS_BETWEEN_ITERATION,
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
} from "./constants";

export const useGameOfLife = () => {
  const [isRunning, setIsRunning] = useState(false);

  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid(NUMBER_OF_ROWS, NUMBER_OF_COLUMNS);
  });

  const runIteration = () => {
    setGrid(getStateOfGridAfterAnIteration);
    setTimeout(runIteration, MILLISECONDS_BETWEEN_ITERATION);
  };

  return {
    grid,
    updateCell: (coordinates: Coordinates, newState: CellState) => {
      const copyOfGrid = generateCopyOfGrid(grid);
      copyOfGrid[coordinates.y][coordinates.x] = newState;

      setGrid(copyOfGrid);
    },
    startGame: () => {
      if (!isRunning) {
        setIsRunning(true);
        runIteration();
      }
    },
    numberOfColumns: NUMBER_OF_COLUMNS,
    isRunning,
  };
};
