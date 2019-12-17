const Chromosome = require("./chromosome");
const { shuffle, distance } = require("./helper");
const { canvas, context } = require("./");

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

		// kill bot 50%
		this.chromosomes.splice(
			Math.floor(this.chromosomes.length / 2),
			Math.ceil(this.chromosomes.length / 2)
		);

		let end = this.chromosomes.length;

		for (let i = 1; i <= end; i += 2) {
			this.chromosomes.push(
				this.updateFitness(
					this.chromosomes[i].makeOffspring(this.chromosomes[i - 1])
				)
			);
			this.chromosomes.push(
				this.updateFitness(
					this.chromosomes[i - 1].makeOffspring(this.chromosomes[i])
				)
			);
		}
	}

	getAverageFitness() {
		let count = 0;
		for (let i of this.chromosomes) count += i.fitness;

		return count / this.chromosomes.length;
	}

	updateFitness(currC) {
		let totalDist = distance(this.parentMap.startingCity, currC.genes[0]);

		for (let j = 0; j < currC.genes.length - 1; j++) {
			totalDist += distance(currC.genes[j], currC.genes[j + 1]);
		}

		totalDist += distance(
			this.parentMap.startingCity,
			currC.genes[currC.genes.length - 1]
		);
		currC.fitness = totalDist;

		return currC;
	}

	// evaluate fitness of given chromosome and updates chromosome.fitness to reflect - O(nm) where n is # chromosomes, m is # genes
	evaluatePopulationFitness() {
		for (let i = 0; i < this.chromosomes.length; i++) {
			this.updateFitness(this.chromosomes[i]);
		}
	}

	printPopulation() {
		console.log([...this.chromosomes]);
	}

	draw() {
		context.beginPath();
		context.moveTo(
			this.parentMap.startingCity.x,
			this.parentMap.startingCity.y
		);
		context.lineTo(
			this.chromosomes[0].genes[0].x,
			this.chromosomes[0].genes[0].y
		);
		context.closePath();
		context.stroke();

		this.chromosomes[0].draw();

		context.beginPath();

		context.moveTo(
			this.parentMap.startingCity.x,
			this.parentMap.startingCity.y
		);
		context.lineTo(
			this.chromosomes[0].genes[this.chromosomes[0].genes.length - 1].x,
			this.chromosomes[0].genes[this.chromosomes[0].genes.length - 1].y
		);
		context.closePath();
		context.stroke();
	}
}

module.exports = Population;
