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

// Find its evolved version in the big Pokémon list
const evolvedBulbasaurtoIvysaur = pokemon.find(p => p.number === 2);
const evolvedIvysaurToVenusaur = pokemon.find(p => p.number === 3);
const evolvedVenusaurToCharmander = pokemon.find(p => p.number === 4);
const evolvedCharmanderToCharmeleon = pokemon.find(p => p.number === 5);

console.log(evolvedBulbasaurtoIvysaur)
console.log(evolvedIvysaurToVenusaur)
console.log(evolvedVenusaurToCharmander)
console.log(evolvedCharmanderToCharmeleon)

// Find the index
const indexOfstarterPokemonBulbasaur = game.party.indexOf(starterPokemonBulbasaur);
const indexOfevolvedBulbasaurtoIvysaur = game.party.indexOf(evolvedBulbasaurtoIvysaur);
const indexOfevolvedIvysaurToVenusaur = game.party.indexOf(evolvedIvysaurToVenusaur);
const indexOfevolvedVenusaurToCharmander = game.party.indexOf(evolvedVenusaurToCharmander);

console.log('index:', indexOfstarterPokemonBulbasaur)
console.log('index:', indexOfevolvedBulbasaurtoIvysaur)
console.log('index:', indexOfevolvedIvysaurToVenusaur)
console.log('index:', indexOfevolvedVenusaurToCharmander)

// Replace the old Pokémon with the new one
game.party.splice(indexOfstarterPokemonBulbasaur, 1, evolvedBulbasaurtoIvysaur);
game.party.splice(indexOfevolvedBulbasaurtoIvysaur, 1, evolvedIvysaurToVenusaur);
game.party.splice(indexOfevolvedIvysaurToVenusaur, 1, evolvedVenusaurToCharmander);
game.party.splice(indexOfevolvedVenusaurToCharmander, 1, evolvedCharmanderToCharmeleon);

console.log('Exercise 7 results, new party:', game.party);

/*

Exercise 7 results, new party: [
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    {
        number: 3,
        name: 'Venusaur',
        type: 'grass',
        hp: 80,
        starter: false
    },
    {
        number: 4,
        name: 'Charmander',
        type: 'fire',
        hp: 39,
        starter: true
    },
    {
        number: 5,
        name: 'Charmeleon',
        type: 'fire',
        hp: 58,
        starter: false
    }
]

*/