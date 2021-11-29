// TODO: Update the object so that the values are an object
// The object should have position (the current array value) 
// and isAlive (boolean) as properties of the object
// Alternate which ones are dead or alive. 
const kataPracticeOne = () => {
  let isAliveCount = 0;
  const neighborsByDirection = {
    "NW": {
      position: [0,0],
      isAlive: true
    },
    "N": {
      position: [0,1],
      isAlive: true
    },
    "NE": {
      position: [0,2],
      isAlive: true
    },
    "W": {
      position: [1,0],
      isAlive: true
    },
    "Center": {
      position: [1,1],
      isAlive: false
    },
    "E": {
      position: [1,2],
      isAlive: true
    },
    "SW": {
      position: [2,0],
      isAlive: true
    },
    "S":  {
      position: [2,1],
      isAlive: false
    },
    "SE": {
      position: [2,2],
      isAlive: true
    }
  }
  // neighborsByDirection.meta
  // neighborsByDirection["meta"]


  for (const direction in neighborsByDirection) {
    console.log("DIRECTION ::: ", direction);
    console.log("DIRECTION VAL", neighborsByDirection[direction])
    const cellProperties = neighborsByDirection[direction]
    const dead = !neighborsByDirection[direction].isAlive
    // We need to check if our variable dead is false 
    // add one (to what??) for each iteration
    if (dead === false) {
      isAliveCount++
    }
  }
  console.log(isAliveCount) 
}

 kataPracticeOne()
