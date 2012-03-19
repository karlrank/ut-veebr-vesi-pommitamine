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

function drawShips(ships) {
	for (i=0;i<=9;i++) {
		
	}
	//$("#playField tbody tr:eq(" + (i + 1) + ") td:eq(" + (j + 1) + ")").css("background-color", "#000000");
}

function validateField() {
	
}

function generateShips(partial, field) {
	var i, j;
	var checked = generateEmptyField();
	var ships = new Array();
	for (i=0;i<=9;i++) {
		for (j=0;j<=9;j++) {
			if (field[i][j] == 1 && checked[i][j] == 0) {
				checked[i][j] = 1;
				var coords = new Array();
				coords.push(new Array(i, j));
				var k;
				for (k=1;k<=3;k++) {
					if (j + k > 9) {
						break;
					}
					checked[i][j + k] = 1;
					if (field[i][j + k] == 1) {
						coords.push(new Array(i, j + k));
					}
					else {
						break;
					}
				}
				for (k=1;k<=3;k++) {
					if (i + k > 9) {
						break;
					}
					checked[i + k][j] = 1;
					if (field[i + k][j] == 1) {
						coords.push(new Array(i + k, j));
					}
					else {
						break;
					}
				}
				ships.push(new Ship(coords));
			}
		}
	}
	return ships;
}

function Server() {
	this.ownField = generateEmptyField(); //temp field, will be in server later
	this.oppField = generateEnemyField(); //temp field, will be in server later
	this.registerShot = registerShot;
	this.getEnemyResponse = getEnemyResponse;
	this.confirmShips = confirmShips;
	this.isGameOver = isGameOver;
	this.ready = ready;
}

function registerShot(shot) {	//returns true if enemy ship was hit
	
} 	

function getEnemyResponse() { 	//returns enemy shot
	return generateRandomEnemyResponse();
}	

function confirmShips() {		//returns true if ship placement is correct
	var ships = generateShips(true, this.oppField);
	drawShips(ships);
}		

function isGameOver() {			//returns false if not, otherwise the winner 0,1,2
	
}

function ready() {
	
}
