const City = require("./city");
const { shuffle, distance } = require("./helper");
const { canvas, context } = require("./");

const citiesList = require("../public/citiesList");

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

		let seen = new Set();

		for (let i = 0; i < cities; i++) {
			let rand = Math.floor(Math.random() * citiesList.length);

			// make sure all cities are unique
			while (seen.has(rand)) {
				rand = Math.floor(Math.random() * citiesList.length);
			}

			seen.add(rand);

			let longLat = citiesList[rand];

			ret.push(
				new City(longLat[0], longLat[1], i === 0 ? true : false, true)
			);
		}

		// code for making random cities
		// for (let i = 0; i < cities; i++) {
		// ret.push(new City(this.width, this.height, i === 0 ? true : false));
		// }

		return ret;
	}

	// method for use with drawing to canvas
	draw() {
		this.cities.forEach(city => {
			city.draw();
		});
	}
}

module.exports = CitiesMap;

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
