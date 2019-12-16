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
	makeOffspring(parentB, mutationRate = 0.01) {
		console.log(this.genes);
		console.log(parentB.genes);
		// 2 - n-1 where n is length of array
		const randLength =
			2 + Math.floor(Math.random() * (this.genes.length - 3));
		//
		const randStart = Math.floor(
			Math.random() * (this.genes.length - randLength)
		);

		let transfer = new Set();
		let offspring = [];
		let place = 0;

		for (let i = 0; i < randLength; i++) {
			transfer.add(this.genes[randStart + i]);
		}

		console.log(transfer);

		while (offspring.length < this.genes.length) {
			if (offspring.length === randStart) {
				transfer.forEach(gene => {
					offspring.push(gene);
				});
			}
			if (!transfer.has(parentB.genes[place])) {
				offspring.push(parentB.genes[place]);
				place++;
			} else place++;
		}

		return offspring;
	}
}

module.exports = Chromosome;
