const Chromosome = require("./chromosome");
const { shuffle, distance } = require("./helper");

class Population {
	constructor(popSize, parentMap) {
		this.parentMap = parentMap;
		this.chromosomes = this.generateInitialPopulation(popSize);
	}

	generateInitialPopulation(size) {
		let ret = [];
		for (let i = 0; i < size; i++) {
			ret.push(new Chromosome(this.parentMap.cities));
		}
		return ret;
	}

	sortByFitness(chromA, chromB) {
		if (chromA.fitness > chromB.fitness) return -1;
		if (chromA.fitness < chromB.fitness) return 1;
		else return 0;
	}

	makeNextGeneration() {
		// sort by fitness
		this.chromosomes.sort(function(chromA, chromB) {
			if (chromA.fitness > chromB.fitness) return 1;
			if (chromA.fitness < chromB.fitness) return -1;
			else return 0;
		});

		// this.chromosomes.forEach(c => {
		// 	console.log(c.fitness);
		// });

		// kill bot 50%
		this.chromosomes.splice(
			Math.floor(this.chromosomes.length / 2),
			Math.ceil(this.chromosomes.length / 2)
		);

		let end = this.chromosomes.length;

		for (let i = 1; i <= end; i += 2) {
			this.chromosomes.push(
				this.chromosomes[i].makeOffspring(this.chromosomes[i - 1])
			);
			this.chromosomes.push(
				this.chromosomes[i - 1].makeOffspring(this.chromosomes[i])
			);
		}
	}

	// evaluate fitness of given chromosome and updates chromosome.fitness to reflect - O(nm) where n is # chromosomes, m is # genes
	evaluateFitness() {
		let totalDist, currC;
		for (let i = 0; i < this.chromosomes.length; i++) {
			currC = this.chromosomes[i];

			totalDist = distance(this.parentMap.startingCity, currC.genes[0]);

			for (let j = 0; j < currC.genes.length - 1; j++) {
				totalDist += distance(currC.genes[j], currC.genes[j + 1]);
			}

			totalDist += distance(
				this.parentMap.startingCity,
				currC.genes[currC.genes.length - 1]
			);
			currC.fitness = totalDist;
		}
		// this.chromosomes.forEach(c => {
		// 	console.log(c.fitness);
		// 	console.log(c.genes);
		// });
	}
}

module.exports = Population;