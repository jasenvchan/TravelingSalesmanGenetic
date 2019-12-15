const Chromosome = require("./chromosome");
const { shuffle, distance } = require("./helper");

class Population {
	constructor(popSize, mapSize) {
		this.mapSize = mapSize - 1;
		this.chromosomes = this.generateInitialPopulation(popSize);
	}

	generateInitialPopulation(size) {
		let ret = [];
		for (let i = 0; i < size; i++) {
			ret.push(new Chromosome(this.mapSize));
		}
		return ret;
	}

	makeNextGeneration() {}

	// evaluate fitness of given chromosome
	// evaluateFitness;
}

module.exports = Population;
