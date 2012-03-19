function generateEmptyField() {
	var field = new Array();
	var i;
	for (i=0;i<=9;i++) {
		field[i] = new Array(0,0,0,0,0,0,0,0,0,0);
	}
	return field;
}

function generateEnemyField() {				//serverless help function
	var field = new Array();
	field[0] = new Array(0,0,0,0,0,0,0,0,0,0);
	field[1] = new Array(0,1,0,0,0,0,0,0,0,0);
	field[2] = new Array(0,1,0,0,1,0,0,1,0,0);
	field[3] = new Array(0,1,0,0,0,0,0,1,0,0);
	field[4] = new Array(0,1,0,1,0,0,0,0,0,0);
	field[5] = new Array(0,0,0,0,0,0,0,0,0,0);
	field[6] = new Array(0,1,0,1,1,1,0,0,1,0);
	field[7] = new Array(0,0,0,0,0,0,0,0,1,0);
	field[8] = new Array(0,1,0,1,1,1,0,0,0,0);
	field[9] = new Array(0,0,0,0,0,0,0,0,1,1);
	return field;
}

var x = 0;
var y = 0;
function generateRandomEnemyResponse() {//serverless help function
	if (x >= 9) {
		x = 0;
		y++;
	}
	else {
		x++;
	}
	return new Array(x, y);
}

function confirmShipPlacement(partial) {
	var i;
	var j;
	for (i=0;i<=9;i++) {
		for (j=0;j<=9;j++) {
			if (server.oppField[i][j] == 1) {
				$("#playField tbody tr:eq(" + (i + 1) + ") td:eq(" + (j + 1) + ")").css("background-color", "#000000");
			}
		}
	}
};

function Server() {
	this.ownField = generateEmptyField(); //temp field, will be in server later
	this.oppField = generateEnemyField(); //temp field, will be in server later
	this.registerShot = registerShot;
	this.getEnemyResponse = getEnemyResponse;
	this.confirmShips = confirmShips;
	this.isGameOver = isGameOver;
}

function registerShot(shot) {	//returns true if enemy ship was hit
	
} 	

function getEnemyResponse() { 	//returns enemy shot
	return generateRandomEnemyResponse();
}	

function confirmShips() {		//returns true if ship placement is correct
	
}		

function isGameOver() {			//returns false if not, otherwise the winner
	
};
