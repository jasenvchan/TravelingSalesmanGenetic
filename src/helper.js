// this method was taken from https://bost.ocks.org/mike/shuffle/
// find the version i wrote on my own and replace this one with it

// shuffle elements in an array in place
function shuffle(array) {
	let m = array.length,
		temp,
		i;

	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		temp = array[m];
		array[m] = array[i];
		array[i] = temp;
	}

	return array;
}

// calculate the distance between two cities
function distance(cityA, cityB) {
	let xDist = (cityB.x - cityA.x) * (cityB.x - cityA.x);
	let yDist = (cityB.y - cityA.y) * (cityB.y - cityA.y);

	return Math.sqrt(xDist + yDist);
}

function swap(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
	return arr;
}
module.exports = { shuffle, distance, swap };
