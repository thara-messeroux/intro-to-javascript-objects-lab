console.log("Hello Thara!"); 

const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
}

// console.dir(pokemon, { maxArrayLength: null })

// Exercise 1: Find the Pokémon with number 59
const pokemon59 = pokemon.find(p => p.number === 59);
console.log("Pokemon #59 is:", pokemon59.name);

// console.log(game)


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?

Solve Exercise 3 here:
*/

game.difficulty = "easy";
console.log('Exercise 3 results:', game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

const starterPokemonBulbasaur = pokemon.find(p => p.starter === true);

console.log(starterPokemonBulbasaur);

game.party.push(starterPokemonBulbasaur);

console.log('Exercise 4 results:', game);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

Solve Exercise 5 here:
*/

const ivysaur_pick1 = pokemon.find(p => p.name == 'Ivysaur');
const venusaur_pick2 = pokemon.find(p => p.name == 'Venusaur');
const charmander_pick3 = pokemon.find(p => p.name == 'Charmander');

game.party.push(ivysaur_pick1, venusaur_pick2, charmander_pick3);

console.log('Exercise 5 results:', game);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for (const gym of game.gyms) {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
}

console.log("Exercise 6 results:", game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// Find the starter Pokémon in the party
const starterIndex = game.party.findIndex(pokemon => pokemon.starter === true);
const starterPokemon = game.party[starterIndex];

// Find its evolved form in the main Pokémon list
// Using number + 1 because of the mapping given in the hints
const evolvedStarterPokemon = pokemon.find(p => p.number === starterPokemon.number + 1);

// Replace the starter in the party with its evolution
game.party.splice(starterIndex, 1, evolvedStarterPokemon);

console.log("Exercise 7 results, new party:", game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
console.log('Exercise 8 results, partyPokemons name:');

for (const pokemon of game.party) {
    console.log(pokemon.name)
}

/*
Exercise 8 results, partyPokemons name:
Ivysaur
Ivysaur
Venusaur
Charmander
*/


/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
console.log('Exercise 9 results, starterPokemons names:');

const starterPokemons = pokemon.filter(pokemon => pokemon.starter === true);

for (const pokemon of starterPokemons) {
    console.log(pokemon.name)
}

/*
Exercise 9 results, starterPokemons names:
Bulbasaur
Charmander
Squirtle
Pikachu
*/

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

/*
Exercise 10
*/

game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj);
};

// choose a Pokémon from the main pokemon array
const pikachu = pokemon.find(p => p.number === 25);

// call the method
game.catchPokemon(pikachu);

console.log("Exercise 10 results:", game.party);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function (pokemonObj) {
    // Add the caught Pokémon to the party
    game.party.push(pokemonObj);

    // Loop through the items array to find the pokeball entry
    for (const item of game.items) {
        // When we find the pokeball object, decrease its quantity by 1
        if (item.name === "pokeball") {
            item.quantity = item.quantity - 1;
            // We could break here since we found it, but it's not required
        }
    }
};

// Pick a Pokémon from the main pokemon data (Charmeleon, #4)
const charmeleon = pokemon.find(p => p.number === 5);

// Catch Charmeleon using our method
game.catchPokemon(charmeleon);

// Testing: log party and items to verify behavior
console.log("Exercise 11 results – party:", game.party);
console.log("Exercise 11 results – items:", game.items);


/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


for (const gym of game.gyms) {
    if (gym.difficulty < 6) {
        gym.completed = true;
    }
}

console.log("Exercise 12 results:", game.gyms);

/*
Exercise 12 results: [
    { location: 'Pewter City', completed: true, difficulty: 1 },
    { location: 'Cerulean City', completed: true, difficulty: 2 },
    { location: 'Vermilion City', completed: true, difficulty: 3 },
    { location: 'Celadon City', completed: true, difficulty: 4 },
    { location: 'Fuchsia City', completed: true, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
]
*/


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.
*/

// Add a new method called gymStatus to the game object
game.gymStatus = function () {
    // Start a tally object with both counts set to 0
    const gymTally = {
        completed: 0,
        incomplete: 0
    };

    // Loop through each gym in the game.gyms array
    for (const gym of game.gyms) {
        // If the gym is completed, increase the completed count
        if (gym.completed === true) {
            gymTally.completed = gymTally.completed + 1;
        } else {
            // Otherwise, increase the incomplete count
            gymTally.incomplete = gymTally.incomplete + 1;
        }
    }

    // Log the final tally
    console.log("Exercise 13 results – gymTally:", gymTally);
    // The method does NOT return anything (no 'return' needed)
};

// Call the method to see the tally in the console
game.gymStatus();

/*
Exercise 13 results – gymTally: { completed: 5, incomplete: 3 }
*/


/*
Exercise 14
Add a `partyCount` method to `game` that counts the number of Pokémon in your party.
*/

// Add the method to the game object
game.partyCount = function () {
    // Count how many Pokémon are in the party
    const count = game.party.length;

    // Return that number (NOT console.log)
    return count;
};

// Test: call the method and log the result
console.log("Exercise 14 results – party count:", game.partyCount());

// Exercise 14 results – party count: 6


/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/


// Loop through all gyms in the game.gyms array
for (const gym of game.gyms) {
    // If the gym's difficulty is less than 8, mark it as completed
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
}

// Log the results to verify that the correct gyms are now completed
console.log("Exercise 15 results:", game.gyms);

/*
Exercise 15 results: [
  { location: 'Pewter City',    completed: true, difficulty: 1 },
  { location: 'Cerulean City',  completed: true, difficulty: 2 },
  { location: 'Vermilion City', completed: true, difficulty: 3 },
  { location: 'Celadon City',   completed: true, difficulty: 4 },
  { location: 'Fuchsia City',   completed: true, difficulty: 5 },
  { location: 'Saffron City',   completed: true, difficulty: 6 }, // now true
  { location: 'Cinnabar Island',completed: true, difficulty: 7 }, // now true
  { location: 'Viridian City',  completed: false, difficulty: 8 } // still false
]
*/

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log("Exercise 16 results:", game);
