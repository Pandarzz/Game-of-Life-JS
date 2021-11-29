# Development Tasks

# Current Development Tasks

[] TODO: Line 6 Creating a grid based on the size the user provides..
[] TODO: We seed the grid with a cell in a state of alive or dead
[] TODO: SIMULTAINELSY!! 
  [] TODO: a. We apply the game of life rules to each cell within the grid
    [] TODO: I. Any live cell with two or three live neighbours survives.
    [] TODO: II. Any dead cell with three live neighbours becomes a live cell.
    [] TODO: III. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
      NOTE: This determines etermines if the cell stays alive or dead OR what the cell should be in the next generation)
    [] Update grid (Tick) so its the next generation
    
## Future Development

[] TODO: Code comment clean up
[] TODO: Code clean up (move functionality into small functions
[] TODO: Visualize grid
[] TODO: Update variable names to make the code easier to understand
[] TODO: Explore how console.table() can be used to output the grid in a prettier way

## Kata practice

[] Update the for loop to use the newer es6 implementation (hint: entries)

## Definitions to keep in mind

Game Of Life Rules:

1. Any live cell with two or three live neighbours survives.
2. Any dead cell with three live neighbours becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

* Seed: The initial grid state
  
    /*
    SEED:
    
    [0] [0] [0]
    [1] [1] [1]
    [0] [1] [0] 
    */
    
* First Generation: Apply GameOfLife Rules to each cell AT THE SAME TIME

    /*
    SEED:
    
    [0] [0] [0]
    [1] [1] [1]
    [0] [1] [0] 
    */
    
    Turns into our first generation (This is a tick)
    
    /*
    FIRST GENERATION:
    
    [0] [1] [0]
    [1] [1] [1]
    [1] [1] [1] 
    */
    
* Tick: 

  Each iteration of processing the grid with the game of life rules
  GameOfLife is applied to the entire grid (All the cells are updated at the same time)
  
  NOTE: Should you keep track of the ticks and what generation we currently are at?

<!-- 
  [0] [0] [0]
  [1] [1] [1]
  [0] [1] [0] 
-->


### Useful code snipets 

/* [gridI-1,rowJ-1] [gridI-1,rowJ] [gridI-1,rowJ+1]
   [gridI, rowJ-1] [gridI,rowJ] [gridI,rowJ+1]
   [gridI+1, rowJ-1] [gridI+1,RowJ] [gridI+1, rowJ+1]
*/