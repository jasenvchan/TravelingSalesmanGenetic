const { shuffle, swap } = require("./helper");

class Chromosome {
	constructor(genePool, randomized = true) {
		this.genes = randomized ? this.getRandomGenes(genePool) : genePool;
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
	makeOffspring(parentB, mutationRate = 0.01) {
		// 2 - n-1 where n is length of array
		const randLength =
			2 + Math.floor(Math.random() * (this.genes.length - 3));
		//
		const randStart = Math.floor(
			Math.random() * (this.genes.length - randLength)
		);

		let transfer = new Set();
		let offspring = new Chromosome([], false);
		let place = 0;

		for (let i = 0; i < randLength; i++) {
			transfer.add(this.genes[randStart + i]);
		}

		while (offspring.genes.length < this.genes.length) {
			if (offspring.genes.length === randStart) {
				transfer.forEach(gene => {
					offspring.genes.push(gene);
				});
			}
			if (!transfer.has(parentB.genes[place])) {
				offspring.genes.push(parentB.genes[place]);
				place++;
			} else place++;
		}

		// random mutation chance
		if (Math.random() <= mutationRate) {
			swap(
				offspring.genes,
				Math.floor(Math.random() * offspring.genes.length),
				Math.floor(Math.random() * offspring.genes.length)
			);
		}

		return offspring;
	}
}

module.exports = Chromosome;
