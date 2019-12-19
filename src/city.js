const { canvas, context } = require("./");

class City {
	constructor(maxWidth, maxHeight, startingCity = false, test = false) {
		// this.x = !test ? Math.floor(Math.random() * maxWidth) : maxWidth;
		// this.y = !test ? Math.floor(Math.random() * maxHeight) : maxHeight;
		this.x = !test ? -90 + Math.floor(Math.random() * 180) : maxWidth;
		this.y = !test ? -180 + Math.floor(Math.random() * 260) : maxHeight;
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
