function Ship(coordinates) {
	this.coordinates = coordinates;
	if (this.coordinates.length == 1) {
		this.orientation = 0; //one square ship, orientation irrelavent
	}
	else if (this.coordinates[0][0] == this.coordinates[1][0]) {
		this.orientation = 1; //horizontal
	}
	else if (this.coordinates[0][1] == this.coordinates[1][1]) {
		this.orientation = 2; //vertical
	}
	this.length = coordinates.length;
	this.getCoordinates = getCoordinates;
}

function getCoordinates() {
	return this.coordinates;
}