const City = require("./city");
const { shuffle, distance } = require("./helper");

class CitiesMap {
	constructor(width, height, numCities = 0) {
		this.width = width;
		this.height = height;
		this.cityCount = numCities;
		this.cities = this.makeRandomMap(this.cityCount);
		this.startingCity = this.cities[0];
	}

	// generates a set of random cities
	makeRandomMap(cities = this.cityCount) {
		let ret = [];

		for (let i = 0; i < cities; i++) {
			ret.push(new City(this.width, this.height));
		}

		return ret;
	}
}

module.exports = CitiesMap;
