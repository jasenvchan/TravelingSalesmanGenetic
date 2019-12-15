const Population = require("./population");
const CitiesMap = require("./CitiesMap");

const numCities = 7;

let allCities = new CitiesMap(600, 400, numCities);
let currPop = new Population(25, numCities);

console.log(allCities);
console.log(currPop);

currPop.chromosomes.forEach(chromosome => {
	console.log(chromosome.genes);
});
