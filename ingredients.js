const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let whileLoopList = function(ingredients) {
  let i = 0;
  console.log("Banana Bread Ingredients:")
  while (i <= ingredients.length) {
    console.log(ingredients[i]);
    i++;
  }
}

// whileLoopList(ingredients);

// Write a for loop that prints out the contents of ingredients:

let forLoopList = function (ingredients) {
  console.log("Banana Bread Ingredients:")
  for (let i = 0; i <= ingredients.length; i++) {
    console.log(ingredients[i]);
  }
}

// forLoopList(ingredients)

// Write any loop (while or for) that prints out the contents of ingredients backwards:

let backwardsList = function (ingredients) {
  console.log("Backwards List of Banana Bread Ingredients") 
    for (let i = ingredients.length; i >= 0; i--) {
      console.log(ingredients[i]);
    }
}

backwardsList(ingredients);