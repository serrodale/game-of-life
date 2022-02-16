import { createContext } from "react";
import { CellState, Grid, Coordinates } from "./types";

export const GameOfLifeContext = createContext<{
  grid: Grid;
  isRunning: boolean;
  numberOfColumns: number;
  startGame: () => void;
  updateCell: (coordinates: Coordinates, newState: CellState) => void;
}>({
  grid: [[]],
  isRunning: false,
  numberOfColumns: 0,
  startGame: () => console.error("Not implemented"),
  updateCell: () => console.error("Not implemented"),
});
