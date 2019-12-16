const Population = require("./population");
const CitiesMap = require("./CitiesMap");

const numCities = 10;

let allCities = new CitiesMap(600, 400, numCities);
let currPop = new Population(20, allCities);

// console.log(allCities);
// console.log(currPop);

console.log(allCities.cities);
// console.log(currPop.chromosomes);
currPop.evaluatePopulationFitness();
console.log(currPop.getAverageFitness());

for (let i = 0; i < 1500; i++) {
	// console.log(currPop.chromosomes[0].fitness);

	currPop.evaluatePopulationFitness();

	// console.log(currPop.chromosomes);

	currPop.makeNextGeneration();
}

console.log(currPop.getAverageFitness());
// console.log(currPop.chromosomes);
// console.log(currPop.chromosomes);
// }

// currPop.chromosomes.forEach(chromosome => {
// 	console.log(chromosome);
// });
