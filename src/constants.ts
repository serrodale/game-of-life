import { Coordinates, XCoordinateDelta, YCoordinateDelta } from "./types";

export const NUMBER_OF_ROWS = 25;
export const NUMBER_OF_COLUMNS = 25;
export const MILLISECONDS_BETWEEN_ITERATION = 250;

export const NEIGHBORS_DELTA_COORDINATES: Coordinates[] = [
  {
    x: XCoordinateDelta.SAME,
    y: YCoordinateDelta.TOP,
  },
  {
    x: XCoordinateDelta.RIGHT,
    y: YCoordinateDelta.TOP,
  },
  {
    x: XCoordinateDelta.RIGHT,
    y: YCoordinateDelta.SAME,
  },
  {
    x: XCoordinateDelta.RIGHT,
    y: YCoordinateDelta.BOTTOM,
  },
  {
    x: XCoordinateDelta.SAME,
    y: YCoordinateDelta.BOTTOM,
  },
  {
    x: XCoordinateDelta.LEFT,
    y: YCoordinateDelta.BOTTOM,
  },
  {
    x: XCoordinateDelta.LEFT,
    y: YCoordinateDelta.SAME,
  },
  {
    x: XCoordinateDelta.LEFT,
    y: YCoordinateDelta.TOP,
  },
];
