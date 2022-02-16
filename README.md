# Game of Life

## Further improvements

* Let the user pause and restart the game.
* Let the user define the time elapsed between each step.
* Let the user define the number of rows/columns (when the game is not running).
* Add a button to create a random initial state (when the game is not running).
* Make the grid infinite by considering the neighbor of a cell in the edge, the ones on the opposite edge. An even further improvement could be to create a real infinite grid using virtualization.
* Add tests (especially, on `utils.ts` and `useGameOfLife.ts`).

I don't usually structure front-end applications like this; but, in this case, as it is a quite simple one, didn't want to over-complicate things.

The same for performance: I didn't take it into account too much. For example, maybe it would've been better to use `useCallback` for some functions, but here I didn't even bother to take a look at the React Devtools console to see wether it made sense or not.
