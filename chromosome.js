const { shuffle, distance } = require("./helper");

class Chromosome {
	constructor(size) {
		this.genes = this.getRandomGenes(size);
		this.fitness = 0;
	}

	// populate this.genes with shuffled genes from 1 to size
	getRandomGenes(size) {
		let res = [];
		for (let i = 0; i < size; i++) {
			res[i] = i + 1;
		}

		return shuffle(res);
	}

	// returns an evaluation of the fitness of this particular gene
	// evaluateFitness() {}

	// returns an offspring of this Chromosome and another Chromosome (parentB)
	makeOffspring(parentB, mutationRate = 0.01) {}
}

module.exports = Chromosome;
