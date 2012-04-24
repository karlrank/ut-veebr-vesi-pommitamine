var shipExplosion = new Audio("http://cero.planet.ee/shipexplosion.wav");
var bombShip = new Audio("http://cero.planet.ee/bombhitship.wav");
var bombWater = new Audio("http://cero.planet.ee/bombtowater.wav");
var rp;

function getShot() {
	$.get("oppHit", function (msg) {
		var ar = JSON.parse(msg);
		$(
				"#playField tbody tr:eq(" + (ar[0] + 1) + ") td:eq("
						+ (ar[1] + 1) + ")").addClass("explosion_s");
		rp.addMove(new Array(1, 1, ar));
		getShot();
	});
}

function clickConfirm() { //main game logic that takes place after the ship have been placed
	if (finalizeShips(generateShips(server.ownField))) {
		$.post("postField", {"field":JSON.stringify(server.ownField)});
		rp = new Replay();
		rp.ships = server.ownShips;
		getShot();
		
		writeToChat("Game is on!");
		$("#confirmButton").hide();
		$("#playField td").unbind();
		$("#oppField td").click(
				function(event) {
					var td = event.target;
					if (td.cellIndex != 0 & td.parentElement.rowIndex != 0) { 
						$.get("ready", function (msg) {
							if (msg == "1") {
								var shot = new Array((td.parentElement.rowIndex - 1), (td.cellIndex - 1));
								$.post("game", {"coords" : JSON.stringify(shot)}, function (msg) {
									if (msg == "0") {
										$(
												"#oppField tbody tr:eq(" + (shot[0] + 1) + ") td:eq("
														+ (shot[1] + 1) + ")").addClass("ripple");
										writeToChat("Shot didn't hit");
										rp.addMove(new Array(2, 2, shot));
										bombWater.play();
										
									}
									else if (msg == "1") {
										$(
												"#oppField tbody tr:eq(" + (shot[0] + 1) + ") td:eq("
														+ (shot[1] + 1) + ")").addClass("explosion");
										writeToChat("Shot hit, new turn");
										rp.addMove(new Array(2, 1, shot));
										bombShip.play();
									}
									else if (msg == "2") {										
										writeToChat("Square already shot, try again.");
									}
									else {
										var ship = JSON.parse(msg);
										var ship = new Ship(ship);
										drawDownedShip(ship);
										writeToChat("Ship sunk, new shot!");
										rp.addMove(new Array(2, 3, shot, ship));
										shipExplosion.play();
									}
								});
							}
							else {
								writeToChat("Not your turn");
							}
							
						});
						
					}
					
					 $.get("gameOver", function(msg) {
						 	if (msg == "1") {
						 		alert("You Won!");
						 		addReplay(rp);
						 		$.post("addResults", {"winlose":1});
								$("#oppField td").unbind();
							}
							else if (msg == "2"){
								writeToChat("You lost!");
								addReplay(rp);
								$.post("addResults", {"winlose":2});
								$("#oppField td").unbind();
							}
					 });
				});
	} else {
		writeToChat("Ships not placed correctly");
	}
}


function clickNewGame() {
	var gameName = prompt("Insert game name", "");
	if (name != null) {
		$.post("addGame", {name:gameName, user:getCookie("name")});
	}
	showPlayField();
	writeToChat("Waiting for opponent");
}

function getNewUsers() {
	setTimeout("$(\"#users\").load(\"usersTemp\");getNewUsers();", 1000);
}

function getNewLobby() {
	setTimeout("$(\"#games\").load(\"lobbyTemp\");getNewLobby();", 1000);
}


function joinGame(id) {
	$.post("joinGame", {"id": id});
	showPlayField();
	writeToChat("Waiting for opponent");
}

$(document).ready(
				function() {
					$("#back").click( function () {
						moveBack();
					});
					$("#pause").click( function () {
						pauseReplay();
					});
					$("#play").click( function () {
						playReplay();
					});
					$("#forward").click( function () {
						nextMove();
					});

					
					var name = prompt("Insert username", "");
					if (name != null) {
						$.post("addPerson", {name:name});
						
					}
					getNewUsers();
					getNewLobby();
					
					server = new Server(); // initialize server object

					$("#playField td") //initialize the ship placement
							.click(
									function(event) {
										td = event.target;
										if (server.ownField[td.parentElement.rowIndex - 1][td.cellIndex - 1] == 1) {
											server.ownField[td.parentElement.rowIndex - 1][td.cellIndex - 1] = 0;
											server.confirmShips();
										} else if (server.ownField[td.parentElement.rowIndex - 1][td.cellIndex - 1] == 0) {
											server.ownField[td.parentElement.rowIndex - 1][td.cellIndex - 1] = 1;
											if (!server.confirmShips()) {
												server.ownField[td.parentElement.rowIndex - 1][td.cellIndex - 1] = 0;
												writeToChat("Illegal ship placement!");
											}
										}
									});
				});

function exitGame() {
	var leave = confirm("Do you really want to leave the game? Doing so means you lose!");
	if(leave) {
		clean();
	}
	cleanFields();
	$.post("gameFinished");
}


window.onbeforeunload = function() {
	$.post("die");
	return "Just leave!";
};




