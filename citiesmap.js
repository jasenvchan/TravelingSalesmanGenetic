const City = require("./city");
const { shuffle, distance } = require("./helper");

class CitiesMap {
	constructor(width, height, numCities = 0) {
		this.width = width;
		this.height = height;
		this.cities = this.makeRandomMap(numCities);
		this.startingCity = this.cities[0];
	}

	// generates a set of random cities
	makeRandomMap(cities = this.cityCount) {
		let ret = [];

		for (let i = 0; i < cities; i++) {
			ret.push(new City(this.width, this.height));
		}

		return ret;

		// let ret = [];

		// ret.push(new City(0, 0));
		// ret.push(new City(0, 100));
		// ret.push(new City(0, 200));
		// ret.push(new City(100, 200));
		// ret.push(new City(200, 200));
		// ret.push(new City(200, 100));
		// ret.push(new City(200, 0));
		// ret.push(new City(100, 0));

		// return ret;
	}
}

module.exports = CitiesMap;
