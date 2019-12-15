class City {
	constructor(maxWidth, maxHeight) {
		this.x = Math.floor(Math.random() * maxWidth);
		this.y = Math.floor(Math.random() * maxHeight);
	}
}

module.exports = City;
