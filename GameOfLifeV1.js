
function start() { 
  const grid = createGrid(3)
  console.log("INITIAL GRID", grid)
  const nextGenGrid = gridNext(grid)
  console.log("NEXT GEN GRID", nextGenGrid)
}

function randomGenerator(){
  let random = Math.random();
    random < 0.5 ? random = 1 : random = 0;
  return random
}
// Create grid function with an empty grid array, then we go into our foor loop to iterate over the grid using size as length
// Then we iterate over grid using size as length
// Then we use a variable named random and set it to a randomGenerator function. 
// Then we use logic to see if random is bigger than 0 and if it is, we set it to true
// Then we push our cell into our row and push our row into our grid. Finally we return the grid. 


// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead

function createGrid(size) {
  let grid = [];
  
  for (let column = 0; column < size; column++) {
    let row = []
    for(let i = 0; i < size;i++) {
      let cell = {
        stillAlive: false
      }
      let random = randomGenerator();
      if (random > 0) {
        cell.stillAlive = true
      }
      row.push(cell);
    }
  grid.push(row);
  }
  return grid;
}

// First, We jump into the grid.
// Second, We Isolate a row in the grid.
// Third, we Isolate a cell in the row
// Fourth, we determine the neighbors of that cell
// Fifth, We determine if the cell lives or dies
// We move onto the next cell, to finish the row. 
// Then we move onto the next row, to finish the grid. 
// Finally we return the grid. 
// Command g to replace *** shortcut
/**
 * // [i,column]
// [0] [0] [0]
// [1] [1] [1]
// [0] [1] [0]
*/

function gridNext (grid) {
  for(let i = 0; i < grid.length; i++) {
    const row = grid[i]
    for(let column = 0; column < row.length; column++) {
      const cell = row[column]
      let neighbors = 0; 
      // We are determing the neighbors of the cell in the grid and incrementing if it is true.
      // Checking north west!
      if (
        grid[i-1] && 
        grid[i-1][column - 1] && 
        grid[i-1][column - 1].stillAlive === true
      ) {
        neighbors--
      }
      // Checking north!
      if (
        grid[i-1] && 
        grid[i-1][column] && 
        grid[i-1][column].stillAlive === true
      ) {
        neighbors++
      }
      // Checking NE!
      if (
        grid[i-1] && 
        grid[i-1][column+1] && 
        grid[i-1][column+1].stillAlive === true
      ) {
        neighbors++
      }
      // Checking West 
      if (
        grid[i] && 
        grid[i][column-1] && 
        grid[i][column-1].stillAlive === true
      ) {
        neighbors++
      }

      // Checking East 
      if (
        grid[i] && 
        grid[i][column+1] && 
        grid[i][column+1].stillAlive === true
      ) {
        neighbors++
      }

      // Checking SouthWest
      if (
        grid[i+1] && 
        grid[i+1][column-1] && 
        grid[i+1][column-1].stillAlive === true
      ) {
        neighbors++
      }

      // Checking South
      if (
        grid[i+1] && 
        grid[i+1][column] && 
        grid[i+1][column].stillAlive === true
      ) {
        neighbors++
      }

      // Checking SouthEast
      if (
        grid[i+1] && 
        grid[i+1][column+1] && 
        grid[i+1][column+1].stillAlive === true
      ) {
        neighbors++
      }
      // We are applying the game of life rules to each cell and determining if the cell lives or dies.  
      // Any dead cell with three live neighbours becomes a live cell.
      // All other live cells die in the next generation. 
      // Similarly, all other dead cells stay dead.
      grid = checkRules(grid, i, column, neighbors)
      }
  }
  return grid
}

const checkRules = (grid, i, column, neighbors) => {

  const nextGen = grid
  if (
    nextGen[i][column].stillAlive && 
    neighbors === 2 || neighbors === 3
  ) {
    // stays alive
    nextGen[i][column].stillAlive === true;
  }
  if (
    !nextGen[i][column].stillAlive 
    && neighbors === 3
  ) {
    // bring back alive
    nextGen[i][column].stillAlive === true; 
  }
  if (
    nextGen[i][column].stillAlive && 
    (neighbors <= 2 || neighbors > 3)
  ) {
    // kill the cell
    nextGen[i][column].stillAlive === false; 
  }
  return nextGen
}

start();
// [i,column]
// [0,0] [0,1] [0,2]
// [1,0] [1,1] [1,2]
// [2,0] [2,1] [2,2]s