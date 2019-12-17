// --CANVAS SETUP--
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 700; // window.innerWidth;
canvas.height = 500; // window.innerHeight;

module.exports = { canvas, context };

// --IMPORTS--
const Population = require("./population");
const CitiesMap = require("./CitiesMap");

// --EVENT LISTENERS

// --LOGICAL SETUP--
const numCities = 10;

let allCities = new CitiesMap(canvas.width, canvas.height, numCities);
let currPop = new Population(36, allCities);

// console.log(allCities);
// console.log(currPop);

console.log(allCities.cities);
// console.log(currPop.chromosomes);
currPop.evaluatePopulationFitness();
console.log(currPop.getAverageFitness());
currPop.printPopulation();

for (let i = 0; i < 3500; i++) {
	currPop.evaluatePopulationFitness();

	currPop.makeNextGeneration();
}

console.log(currPop.getAverageFitness());
currPop.printPopulation();

function animate() {
	window.requestAnimationFrame(animate);
	context.clearRect(0, 0, canvas.width, canvas.height);
	allCities.draw();
	currPop.draw();
}

animate();
