function writeToChat(text) {
	$("#chatField").append(">" + text + "<br />");
	$("#chatField")
			.scrollTop(document.getElementById("chatField").scrollHeight)
}

function generateEnemyField() { // serverless help function
	var field = new Array();
	field[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	field[1] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
	field[2] = new Array(0, 1, 0, 0, 1, 0, 0, 1, 0, 0);
	field[3] = new Array(0, 1, 0, 0, 0, 0, 0, 1, 0, 0);
	field[4] = new Array(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
	field[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	field[6] = new Array(0, 1, 0, 1, 1, 1, 0, 0, 1, 0);
	field[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
	field[8] = new Array(0, 1, 0, 1, 1, 1, 0, 0, 0, 0);
	field[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
	return field;
}

var x = 0;
var y = 0;
function generateRandomEnemyResponse() {// serverless help function
	var resp = new Array(x, y);
	if (x >= 9) {
		x = 0;
		
		y++;
	} else {
		x++;
	}
	return resp;
}

function drawShips(ships) {
	var i, j, coords;

	for (i = 0; i < 10; i++) {
		for (j = 0; j < 10; j++) {
			$("#playField tbody tr:eq(" + (i + 1) + ") td:eq(" + (j + 1) + ")")
					.removeClass();
		}
	}

	for (i = 0; i < ships.length; i++) {
		coords = ships[i].getCoordinates();
		if (ships[i].orientation == 0) {
			$(
					"#playField tbody tr:eq(" + (coords[0][0] + 1) + ") td:eq("
							+ (coords[0][1] + 1) + ")").addClass("shipOneShip");
		}
		if (ships[i].orientation == 1) {
			var len = coords.length;
			$(
					"#playField tbody tr:eq(" + (coords[0][0] + 1) + ") td:eq("
							+ (coords[0][1] + 1) + ")").addClass("shipNoseEW");
			for (j = 1; j < (len - 1); j++) {
				$(
						"#playField tbody tr:eq(" + (coords[j][0] + 1)
								+ ") td:eq(" + (coords[j][1] + 1) + ")")
						.addClass("shipMidEW");
			}
			$(
					"#playField tbody tr:eq(" + (coords[len - 1][0] + 1)
							+ ") td:eq(" + (coords[len - 1][1] + 1) + ")")
					.addClass("shipTailEW");
		}
		if (ships[i].orientation == 2) {
			var len = coords.length;
			$(
					"#playField tbody tr:eq(" + (coords[0][0] + 1) + ") td:eq("
							+ (coords[0][1] + 1) + ")").addClass("shipNoseNS");
			for (j = 1; j < (len - 1); j++) {
				$(
						"#playField tbody tr:eq(" + (coords[j][0] + 1)
								+ ") td:eq(" + (coords[j][1] + 1) + ")")
						.addClass("shipMidNS");
			}
			$(
					"#playField tbody tr:eq(" + (coords[len - 1][0] + 1)
							+ ") td:eq(" + (coords[len - 1][1] + 1) + ")")
					.addClass("shipTailNS");
		}

	}
}

function generateEmptyField() {
	var field = new Array();
	var i;
	for (i = 0; i <= 9; i++) {
		field[i] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	}
	return field;
}

function drawDownedShip(ship) {
	var i, coords;
	var muut = ship.getCoordinates()[0][0];
	var coords = ship.getCoordinates();
	for (i = 0; i < coords.length; i++) {
		$(
				"#oppField tbody tr:eq(" + (coords[i][0] + 1) + ") td:eq("
						+ (coords[i][1] + 1) + ")").addClass("explosion");
	}
	if (ship.orientation == 0) {
		for (i = -1; i <= 1; i++) {
			if (ship.getCoordinates()[0][0] + i >= 0
					&& ship.getCoordinates()[0][0] + i < 10) {
				$(
						"#oppField tbody tr:eq(" + (coords[0][0] + 1 + i)
								+ ") td:eq(" + (coords[0][1] + 0) + ")")
						.addClass("ripple");
				$(
						"#oppField tbody tr:eq(" + (coords[0][0] + 1 + i)
								+ ") td:eq(" + (coords[0][1] + 2) + ")")
						.addClass("ripple");
			}
		}
		if (coords[0][1] - 1 >= 0) {
			$(
					"#oppField tbody tr:eq(" + (coords[0][0]) + ") td:eq("
							+ (coords[0][1] + 1) + ")").addClass("ripple");
		}
		if (coords[0][1] + 1 < 10) {
			$(
					"#oppField tbody tr:eq(" + (coords[0][0] + 2) + ") td:eq("
							+ (coords[0][1] + 1) + ")").addClass("ripple");
		}
	}

	if (ship.orientation == 1) {
		for (i = 0; i < ship.length; i++) {
			if (coords[0][0] - 1 > 0) {
				$(
						"#oppField tbody tr:eq(" + (coords[i][0]) + ") td:eq("
								+ (coords[i][1] + 1) + ")").addClass("ripple");
			}
			if (coords[0][0] + 1 < 10) {
				$(
						"#oppField tbody tr:eq(" + (coords[i][0] + 2)
								+ ") td:eq(" + (coords[i][1] + 1) + ")")
						.addClass("ripple");
			}
		}
		if ((coords[0][1] - 1) > 0) {
			if ((coords[0][0] - 1) > 0) {
				$(
						"#oppField tbody tr:eq(" + (coords[0][0]) + ") td:eq("
								+ (coords[0][1]) + ")").addClass("ripple");
			}
			$(
					"#oppField tbody tr:eq(" + (coords[0][0] + 1) + ") td:eq("
							+ (coords[0][1]) + ")").addClass("ripple");
			if ((coords[0][0] + 1) < 10) {
				$(
						"#oppField tbody tr:eq(" + (coords[0][0] + 2)
								+ ") td:eq(" + (coords[0][1]) + ")").addClass(
						"ripple");
			}
		}
		if ((coords[coords.length - 1][1] + 1) < 10) {
			if ((coords[coords.length - 1][0] - 1) > 0) {
				$(
						"#oppField tbody tr:eq("
								+ (coords[coords.length - 1][0]) + ") td:eq("
								+ (coords[coords.length - 1][1] + 2) + ")")
						.addClass("ripple");
			}
			$(
					"#oppField tbody tr:eq("
							+ (coords[coords.length - 1][0] + 1) + ") td:eq("
							+ (coords[coords.length - 1][1] + 2) + ")")
					.addClass("ripple");
			if ((coords[coords.length - 1][0] + 1) < 10) {
				$(
						"#oppField tbody tr:eq("
								+ (coords[coords.length - 1][0] + 2)
								+ ") td:eq("
								+ (coords[coords.length - 1][1] + 2) + ")")
						.addClass("ripple");
			}
		}

	}
	for (t = 0; t < ship.length; t++) {
		var muut = ship.getCoordinates()[0][0];
		$(
				"#oppField tbody tr:eq(" + (ship.getCoordinates()[t][0] + 1)
						+ ") td:eq(" + (ship.getCoordinates()[t][1] + 1) + ")")
				.addClass("explosion");
		if (ship.orientation == 2) {
			for (k = 0; k < ship.length + 2; k++) {
				console.log(t);
				if (t + 1 == ship.length) {
					if (ship.getCoordinates()[t][0] != 11) {
						$(
								"#oppField tbody tr:eq("
										+ (ship.getCoordinates()[t][0] + 2)
										+ ") td:eq("
										+ (ship.getCoordinates()[1][1] + 1)
										+ ")").addClass("ripple");
					}
					if (ship.getCoordinates()[0][0] != 0) {
						$(
								"#oppField tbody tr:eq("
										+ (ship.getCoordinates()[0][0])
										+ ") td:eq("
										+ (ship.getCoordinates()[1][1] + 1)
										+ ")").addClass("ripple");
					}
					if (ship.getCoordinates()[1][1] + 2 < 11) {
						if (muut != 0 && muut != 11) {
							$(
									"#oppField tbody tr:eq(" + (muut)
											+ ") td:eq("
											+ (ship.getCoordinates()[1][1] + 2)
											+ ")").addClass("ripple");
						}
					}
					if (ship.getCoordinates()[1][1] > 0) {
						if (muut != 0 && muut != 11) {
							$(
									"#oppField tbody tr:eq(" + (muut)
											+ ") td:eq("
											+ (ship.getCoordinates()[1][1])
											+ ")").addClass("ripple");
						}
					}
					muut++;
				}
			}
		}
	}

}

function validateShips(field) {
	var i, j, k;
	for (i = 0; i <= 8; i++) {
		for (j = 0; j <= 8; j++) {
			var num = 0;
			var oth = 0;
			if (field[i][j] == 1
					&& (field[i + 1][j] == 1 && field[i][j + 1] == 1
							|| field[i + 1][j + 1] == 1 || (j > 0 && i > 0 && field[i - 1][j + 1] == 1))) {
				return false;
				break;
			}
			for (k = 0; k < 10 - i; k++) {
				if (field[i + k][j] == 1) {
					num++;
					if (num > 4) {
						return false;
					}
				} else {
					break;
				}
			}
			for (k = 0; k < 10 - j; k++) {
				if (field[i][j + k] == 1) {
					oth++;
					if (oth > 4) {
						return false;
					}
				} else {
					break;
				}
			}
		}
	}
	return true;
}

function finalizeShips(ships) {
	var i;
	var ship1 = 0;
	var ship2 = 0;
	var ship3 = 0;
	var ship4 = 0;
	for (i = 0; i < ships.length; i++) {
		if (ships[i].length == 1) {
			ship1++;
		}
		if (ships[i].length == 2) {
			ship2++;
		}
		if (ships[i].length == 3) {
			ship3++;
		}
		if (ships[i].length == 4) {
			ship4++;
		}
	}
	if (ship1 == 4 && ship2 == 3 && ship3 == 2 && ship4 == 1) {
		server.ownShips = generateShips(server.ownField);
		return true;
	}
	return false;
}

function generateShips(field) {
	var i, j;
	var checked = generateEmptyField();
	var ships = new Array();
	for (i = 0; i <= 9; i++) {
		for (j = 0; j <= 9; j++) {
			if (field[i][j] == 1 && checked[i][j] == 0) {
				checked[i][j] = 1;
				var coords = new Array();
				coords.push(new Array(i, j));
				var k;
				for (k = 1; k <= 3; k++) {
					if (j + k > 9) {
						break;
					}
					checked[i][j + k] = 1;
					if (field[i][j + k] == 1) {
						coords.push(new Array(i, j + k));
					} else {
						break;
					}
				}
				for (k = 1; k <= 3; k++) {
					if (i + k > 9) {
						break;
					}
					checked[i + k][j] = 1;
					if (field[i + k][j] == 1) {
						coords.push(new Array(i + k, j));
					} else {
						break;
					}
				}
				ships.push(new Ship(coords));
			}
		}
	}
	return ships;
}

function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}