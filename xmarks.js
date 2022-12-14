//Function that calculates position of the parade based on array of directional moves
//Moves on an X-Y grid
//Parade begins at [0,0]

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPositions (moves) {
  let position = [0,0]
  
  for (const move of moves) {
    if (move === "north") {
      position[1] += 1
    } 
    if (move === "south") {
      position[1] -= 1
    } 
    if (move === "west") {
      position[0] -= 1
    } 
    if (move === "east") {
      position[0] += 1
    } 
  }
  return position
 }

console.log(finalPositions(moves));
