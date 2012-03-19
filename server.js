function generateEmptyField() {}
function generateEnemyField() {} //serverless help function
function generateRandomEnemyResponse() {} //serverless help function

function Server() {
	this.ownField = generateEmptyField(); //temp field, will be in server later
	this.oppField = generateEnemyField(); //temp field, will be in server later
	this.registerShot = registerShot;
	this.getEnemyResponse = getEnemyResponse;
	this.confirmShips = confirmShips;
	this.confirmShipsPartial = confirmShipsPartial;
}

function registerShot(shot) {} 	//returns true if enemy ship was hit
function getEnemyResponse() {}	//returns enemy shot
function confirmShips() {}		//returns true if ship placement is correct
function confirmShipsPartial() {}	//sets ship images and confirms placement (returns true if correct)