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

	var msg = $.post("game", {"coords" : JSON.stringify(shot)});
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
	
	/*
	if (this.oppField[shot[0]][shot[1]] == 1) {
		this.oppField[shot[0]][shot[1]] = 2;
		var i, j;
		for (i = 0; i < this.enemyShips.length; i++) {
			var down = true;

			for (j = 0; j < this.enemyShips[i].length; j++) {
				if (this.oppField[this.enemyShips[i].getCoordinates()[j][0]][this.enemyShips[i]
						.getCoordinates()[j][1]] == 1) {
					down = false;
				}
			}
			if (down) {
				drawDownedShip(this.enemyShips[i]);
				this.enemyShips.splice(i, 1);
				return 3;
			}
		}
		$(
				"#oppField tbody tr:eq(" + (shot[0] + 1) + ") td:eq("
						+ (shot[1] + 1) + ")").addClass("explosion");
		return 1;
	} else if (this.oppField[shot[0]][shot[1]] == 3
			|| this.oppField[shot[0]][shot[1]] == 2) {
		return 2;
	} else {
		this.oppField[shot[0]][shot[1]] = 3;
		$(
				"#oppField tbody tr:eq(" + (shot[0] + 1) + ") td:eq("
						+ (shot[1] + 1) + ")").addClass("ripple");
		var hit = true;
		while (hit) {
			var enemyShot = getEnemyResponse();
			if (this.ownField[enemyShot[0]][enemyShot[1]] == 1) {
				this.ownField[enemyShot[0]][enemyShot[1]] == 2;
				$(
						"#playField tbody tr:eq(" + (enemyShot[0] + 1)
								+ ") td:eq(" + (enemyShot[1] + 1) + ")")
						.addClass("explosion_s");
			} else {
				$(
						"#playField tbody tr:eq(" + (enemyShot[0] + 1)
								+ ") td:eq(" + (enemyShot[1] + 1) + ")")
						.addClass("ripple_s");
				hit = false;
			}
		}
		return 0;
	}*/
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
	
//	if (this.enemyShips.length == 0) {
//		return 1;
//	}
//	if (this.ownShips.length == 0) {
//		return 2;
//	}
//	return 0;
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
