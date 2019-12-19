const mapboxgl = require("mapbox-gl");

const activities = {
	Activity: "url(http://i.imgur.com/WbMOfMl.png)",
	Hotel: "url(http://i.imgur.com/D9574Cu.png)",
	Restaurant: "url(http://i.imgur.com/cqR6pUI.png)"
};

function buildMarker(activity, longLatArr) {
	let markerDomEl = document.createElement("div"); // Create a new, detached DIV
	markerDomEl.style.width = "32px";
	markerDomEl.style.height = "39px";
	markerDomEl.style.backgroundImage = activities[activity];
	markerDomEl.style.cursor = "pointer";
	markerDomEl.style.position = "absolute";

	let newMarker = new mapboxgl.Marker(markerDomEl);
	newMarker.setLngLat(longLatArr);
	return newMarker;
}

module.exports = buildMarker;
