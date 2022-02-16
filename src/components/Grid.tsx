import React, { useContext } from "react";
import styled from "styled-components";
import { Cell } from "./Cell";
import { GameOfLifeContext } from "../GameOfLifeContext";

const GridStyles = styled.div<{ numberOfColumns: number }>`
  display: grid;
  margin-top: 15px;
  border: 1px solid black;
  grid-template-columns: repeat(${(props) => props.numberOfColumns}, 20px);
`;

export const Grid: React.FC = () => {
  const { grid, numberOfColumns } = useContext(GameOfLifeContext);

  return (
    <GridStyles numberOfColumns={numberOfColumns}>
      {grid.map((rows, y) =>
        rows.map((_, x) => <Cell key={`(${x}, ${y})`} coordinates={{ x, y }} />)
      )}
    </GridStyles>
  );
};
