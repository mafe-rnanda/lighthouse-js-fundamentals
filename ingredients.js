const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

console.log("\nend of first list\n");
// Write a for loop that prints out the contents of ingredients:
for (let x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}

console.log("\nend of second list\n");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let y = 8; y >= 0; y--) {
  console.log(ingredients[y]);
}

console.log('\nend of third list\n');