const Population = require("./population");
const CitiesMap = require("./CitiesMap");

const numCities = 25;

let allCities = new CitiesMap(600, 400, numCities);
let currPop = new Population(20, allCities);

// console.log(allCities);
// console.log(currPop);

console.log(allCities.cities);

for (let i = 0; i < 200; i++) {
	console.log(currPop.chromosomes[0].fitness);
	currPop.evaluateFitness();

	// console.log(currPop.chromosomes);

	currPop.makeNextGeneration();
}

// console.log(currPop.chromosomes);
// }

// currPop.chromosomes.forEach(chromosome => {
// 	console.log(chromosome);
// });
