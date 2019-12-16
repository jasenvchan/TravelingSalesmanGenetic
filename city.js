class City {
	constructor(maxWidth, maxHeight, test = false) {
		this.x = !test ? Math.floor(Math.random() * maxWidth) : maxWidth;
		this.y = !test ? Math.floor(Math.random() * maxHeight) : maxHeight;
	}
}

module.exports = City;
