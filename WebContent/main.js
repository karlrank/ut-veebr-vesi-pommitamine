function clickConfirm() { //main game logic that takes place after the ship have been placed
	if (finalizeShips(generateShips(server.ownField))) {
		writeToChat("Game is on!");
		$("#confirmButton").hide();
		$("#playField td").unbind();
		$("#oppField td").click(
				function(event) {
					td = event.target;
					if (td.cellIndex != 0 & td.parentElement.rowIndex != 0) { // if
																				// correct
																				// square
																				// is
																				// clicked
						if (server.ready()) {
							var shot = server.registerShot(new Array(
									(td.parentElement.rowIndex - 1),
									(td.cellIndex - 1)));
							if (shot == 0) {
								writeToChat("Shot didn't hit");
							} else if (shot == 1) {
								writeToChat("Shot hit, new turn");
							} else if (shot == 3) {
								writeToChat("Ship sunk, new shot!");
							} else {
								writeToChat("Square already shot, try again.");
							}
						} else {
							writeToChat("Not your turn");
						}
					}
					if (server.isGameOver() == 1) {
						alert("You Won!");
						$("#oppField td").unbind();
					}
					if (server.isGameOver() == 2) {
						writeToChat("You lost!");
						$("#oppField td").unbind();
					}
				});
	} else {
		writeToChat("Ships not placed correctly");
	}
}

function clickNewGame() {
	var gameName = prompt("Game name Get!", "");
	if (name != null) {
		$.post("addGame", {name:gameName, user:getCookie("name")});
	}
	$("#users").load("getPeople");
	$("#games").load("getLobby");
	showPlayField();
	writeToChat("Waiting for opponent");
}

$(document)
		.ready(
				function() {
					if (getCookie("name") == undefined) {
						var name = prompt("Name Get!", "");
						if (name != null) {
							$.post("add", {name:name});
							
						}
					}
					
					$("#users").load("getPeople");
					$("#games").load("getLobby");
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
									})
				});