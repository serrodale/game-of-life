import React, { FC, useContext } from "react";
import styled from "styled-components";
import { CellState, Coordinates } from "../types";
import { GameOfLifeContext } from "../GameOfLifeContext";

type Props = {
  coordinates: Coordinates;
};

const CellStyles = styled.div<{ cellState: CellState }>`
  width: 20px;
  height: 20px;
  background: ${(props) =>
    props.cellState === CellState.ALIVE ? "black" : null};
  border: solid 1px black;
`;

export const Cell: FC<Props> = ({ coordinates }) => {
  const { grid, updateCell, isRunning } = useContext(GameOfLifeContext);
  const cellState = grid[coordinates.y][coordinates.x];

  return (
    <CellStyles
      cellState={cellState}
      onClick={() => {
        if (!isRunning) {
          updateCell(
            coordinates,
            cellState === CellState.DEAD ? CellState.ALIVE : CellState.DEAD
          );
        }
      }}
    />
  );
};
