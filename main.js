const Population = require("./population");
const CitiesMap = require("./CitiesMap");

const numCities = 7;

let allCities = new CitiesMap(600, 400, numCities);
let currPop = new Population(50, allCities);

// console.log(allCities);
// console.log(currPop);

currPop.evaluateFitness();

currPop.makeNextGeneration();

currPop.chromosomes[0].makeOffspring(currPop.chromosomes[1]);
currPop.chromosomes[1].makeOffspring(currPop.chromosomes[0]);

// currPop.chromosomes.forEach(chromosome => {
// 	console.log(chromosome);
// });
