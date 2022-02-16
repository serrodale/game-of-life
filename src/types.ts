export enum CellState {
  DEAD,
  ALIVE,
}

export interface Coordinates {
  x: number;
  y: number;
}

export type Grid = CellState[][];

export enum XCoordinateDelta {
  SAME = 0,
  LEFT = -1,
  RIGHT = 1,
}

export enum YCoordinateDelta {
  SAME = 0,
  TOP = 1,
  BOTTOM = -1,
}
