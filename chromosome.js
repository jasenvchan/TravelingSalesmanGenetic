const { shuffle, distance } = require("./helper");

class Chromosome {
	constructor(genePool) {
		this.genes = this.getRandomGenes(genePool);
		this.fitness = 0;
	}

	// populate this.genes with shuffled genes from 1 to size
	getRandomGenes(genePool) {
		let res = [];
		for (let i = 0; i < genePool.length - 1; i++) {
			res[i] = genePool[i + 1];
		}

		return shuffle(res);
	}

	// returns an evaluation of the fitness of this particular gene
	// evaluateFitness() {}

	// returns an offspring of this Chromosome and another Chromosome (parentB)
	makeOffspring(parentB, mutationRate = 0.01) {}
}

module.exports = Chromosome;
