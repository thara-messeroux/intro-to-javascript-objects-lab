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

const ivysaur = pokemon.find(p => p.name == 'Ivysaur');
const venusaur = pokemon.find(p => p.name == 'Venusaur');
const charmander = pokemon.find(p => p.name == 'Charmander');

game.party.push(ivysaur, venusaur, charmander);

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
