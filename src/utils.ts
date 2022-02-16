import { CellState, Coordinates } from "./types";
import { NEIGHBORS_DELTA_COORDINATES } from "./constants";

export const generateEmptyGrid = (
  numberOfRows: number,
  numberOfColumns: number
) => {
  const rows = [];

  for (let y = 0; y < numberOfRows; y++) {
    rows.push(Array.from(Array(numberOfColumns), () => CellState.DEAD));
  }

  return rows;
};

const getGridDimensions = (grid: CellState[][]) => {
  return {
    numberOfRows: grid.length,
    numberOfColumns: grid?.[0]?.length,
  };
};

export const generateCopyOfGrid = (grid: CellState[][]) => {
  const { numberOfRows, numberOfColumns } = getGridDimensions(grid);
  const copyOfGrid = generateEmptyGrid(numberOfRows, numberOfColumns);

  for (let y = 0; y < numberOfRows; y++) {
    for (let x = 0; x < numberOfColumns; x++) {
      copyOfGrid[y][x] = grid[y][x];
    }
  }

  return copyOfGrid;
};

const coordinatesAreWithinBorders = (
  { x, y }: Coordinates,
  grid: CellState[][]
) => {
  const { numberOfRows, numberOfColumns } = getGridDimensions(grid);
  const xIsWithinBorders = x >= 0 && x < numberOfRows;
  const yIsWithinBorders = y >= 0 && y < numberOfColumns;

  return xIsWithinBorders && yIsWithinBorders;
};

const getNumberOfNeighbors = (
  grid: CellState[][],
  { x, y }: Coordinates
): number => {
  let neighbors = 0;

  NEIGHBORS_DELTA_COORDINATES.forEach(({ x: xDelta, y: yDelta }) => {
    const neighborX = x + xDelta;
    const neighborY = y + yDelta;

    if (coordinatesAreWithinBorders({ x: neighborX, y: neighborY }, grid)) {
      if (grid[neighborY][neighborX] === CellState.ALIVE) {
        neighbors++;
      }
    }
  });

  return neighbors;
};

export const getStateOfGridAfterAnIteration = (grid: CellState[][]) => {
  const newGrid = generateCopyOfGrid(grid);
  const { numberOfRows, numberOfColumns } = getGridDimensions(grid);

  for (let y = 0; y < numberOfRows; y++) {
    for (let x = 0; x < numberOfColumns; x++) {
      const numberOfNeighbors = getNumberOfNeighbors(grid, { x, y });

      if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
        newGrid[y][x] = CellState.DEAD;
      } else if (grid[y][x] === 0 && numberOfNeighbors === 3) {
        newGrid[y][x] = CellState.ALIVE;
      }
    }
  }

  return newGrid;
};
