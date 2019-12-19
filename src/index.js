// --CANVAS SETUP--
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 700; // window.innerWidth;
canvas.height = 500; // window.innerHeight;

module.exports = { canvas, context };

// --IMPORTS--
const Population = require("./population");
const CitiesMap = require("./CitiesMap");
const mapboxgl = require("mapbox-gl");

// --EVENT LISTENERS

// --LOGICAL SETUP--
const numCities = 20;

let allCities = new CitiesMap(canvas.width, canvas.height, numCities);
let currPop = new Population(40, allCities);

console.log(allCities.cities);

currPop.evaluatePopulationFitness();
console.log(currPop.getAverageFitness());
currPop.printPopulation();

for (let i = 0; i < 4000; i++) {
	currPop.evaluatePopulationFitness();

	currPop.makeNextGeneration();
}

console.log(currPop.getAverageFitness());
currPop.printPopulation();

allCities.draw();
currPop.draw();

// map stuff

mapboxgl.accessToken =
	"pk.eyJ1IjoiamFzZW52Y2hhbiIsImEiOiJjazM0bnJmZGsweXFhM2JvYjN5dGczZnQ0In0.g607cEx74ZLeyFBUiOxSvQ";

const map = new mapboxgl.Map({
	container: "map",
	center: [-75.001, 40.001], //[-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
	zoom: 0, // starting zoom
	style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const makeMarker = require("./marker.js");

for (let city of allCities.cities) {
	const marker = makeMarker("Activity", [city.y, city.x]);
	marker.addTo(map);
}

let newLineObj = {
	id: "route",
	type: "line",
	source: {
		type: "geojson",
		data: {
			type: "Feature",
			properties: {},
			geometry: {
				type: "LineString",
				coordinates: []
			}
		}
	},
	layout: {
		"line-join": "round",
		"line-cap": "round"
	},
	paint: {
		"line-color": "#888",
		"line-width": 8
	}
};

const coords = newLineObj.source.data.geometry.coordinates;

coords.push([
	currPop.parentMap.startingCity.y,
	currPop.parentMap.startingCity.x
]);

for (let city of currPop.chromosomes[0].genes) {
	coords.push([city.y, city.x]);
}

coords.push([
	currPop.parentMap.startingCity.y,
	currPop.parentMap.startingCity.x
]);

map.on("load", function() {
	map.addLayer(newLineObj);
});
