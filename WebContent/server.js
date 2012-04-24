function Server() { //class that represents the server more or less
	this.ownField = generateEmptyField(); // temp field, will be in server
											// later
	this.oppField = generateEnemyField(); // temp field, will be in server
											// later
	this.enemyShips = generateShips(this.oppField); // temp field, will be in
													// server later
	this.ownShips = generateShips(this.ownField); // temp field, will be in
													// server later
	this.registerShot = registerShot;
	this.getEnemyResponse = getEnemyResponse;
	this.confirmShips = confirmShips;
	this.isGameOver = isGameOver;
	this.ready = ready;
}

function registerShot(shot) { 	// returns 1 if enemy ship was hit
								// 3 is sunk, 2 if square is already shot and 0 if simply a miss

	$.post("game", {"coords" : JSON.stringify(shot)});
	var txt = "123";
	
	
	
	if (txt == "0") {
		return 0;
	}
	else if (txt == "1") {
		return 1;
	}
	else if (txt == "2") {
		return 2;
	}
	else {
		var ship = JSON.parse(txt);
		var ship = new Ship(ship.coordinates);
		drawDownedShip(ship);
		return 3;
	}
}

function getEnemyResponse() { // returns enemy shot
	return generateRandomEnemyResponse();
}

function confirmShips() { //returns true if ship placement is correct
	if (!validateShips(this.ownField)) {
		return false;
	}
	drawShips(generateShips(this.ownField));
	return true;
}

function isGameOver() { //0,1,2
	var msg = $.get("gameOver");
	setTimeout("", 200);
	var txt = msg.responseText;
	
	if (txt == "1") {
		return 1;
	}
	else if (txt == "2"){
		return 2;
	}
	else {
		return 0;
	}
}

function ready() {
	var msg = $.get("ready");
	setTimeout("", 200);
	var txt = msg.responseText;
	if (txt == "1") {
		return true;
	}
	else {
		return false;
	}
}
