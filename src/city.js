const { canvas, context } = require("./");

class City {
	// if test is true, use exact maxWidth, maxheight coords
	constructor(maxWidth, maxHeight, startingCity = false, test = false) {
		// code for randomly generating cities for canvas
		this.x = !test ? Math.floor(Math.random() * maxWidth) : maxWidth;
		this.y = !test ? Math.floor(Math.random() * maxHeight) : maxHeight;

		// code for randomly generating cities at points in North America
		// this.x = !test
		// 	? 19.5014 + Math.floor(Math.random() * 45.3555)
		// 	: maxWidth;
		// this.y = !test
		// 	? -161.7558 + Math.floor(Math.random() * 93.7439)
		// 	: maxHeight;

		this.isStartingCity = startingCity;
	}

	draw() {
		if (this.isStartingCity) {
			context.fillRect(this.x, this.y, 15, 15);
		} else {
			context.beginPath();
			context.moveTo(this.x, this.y);
			context.arc(this.x - 5, this.y - 5, 10, 0, Math.PI * 2, false);
			context.stroke();
		}
	}
}

module.exports = City;
