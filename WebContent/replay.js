
if (localStorage.replayID == undefined) {
	localStorage.replayID = "1";
}

if (localStorage.replays == undefined) {
	localStorage.replays = JSON.stringify(new Array());
}

var moves, loc, playing, ships;

function addReplay(replay) {
		var replays = JSON.parse(localStorage.replays);
		replays.push(replay);
		localStorage.replays = JSON.stringify(replays);	
}

function displayMove(move) {
	if (move[0] == 1) { //vasakule väljakule(Own)
		if(move[1] == 1) {
			addOwnExplosion(move[2][0], move[2][1]);
		}
	}
	else if (move[0] == 2) { //paremale väljakule(Opp)
		if(move[1] == 1) {
			addOppExplosion(move[2][0], move[2][1]);
		}
		else if(move[1] == 2) {
			addOppRipple(move[2][0], move[2][1]);
		}
		else if(move[1] == 3) {
			addOppExplosion(move[2][0], move[2][1]);
			drawDownedShip(move[3]);
		}
	}
}

function pauseReplay() {
	playing = 0;
}

function playReplay() {
	if (playing != 1) {
		playing = 1;
		reallyPlay();
	}
}
function nextMove() {
	loc = loc + 1;
	if (loc < (moves.length - 1)) {
		move = moves[loc];
		displayMove(move);
	}
}

function moveBack() {
	cleanFields();
	drawShips(ships);
	loc = loc - 1;
	for ( var i = 0; i <= loc; i++) {
		displayMove(moves[i]);
	}
}

function reallyPlay() {
	loc = loc + 1;
	move = moves[loc];
	displayMove(move);
	if (playing == 1 && loc < (moves.length - 1)) {
		setTimeout("reallyPlay()", 1000);
	}
}

function startReplay(id) {
	showPlayField();
	var replays = JSON.parse(localStorage.replays);
	
	for ( var i = 0; i < replays.length; i++) {
		if (replays[i].id == id) {
			drawShips(replays[i].ships);
			ships = replays[i].ships;
			moves = replays[i].moves;
		}
	}
	
	loc = 0;
	$("#replayControl").show();
}

function getNewReplayId() {
	id = parseInt(localStorage.replayID) + 1;
	localStorage.replayID = new String(id);
	return id;
}

function displayReplays() {
	if (localStorage.replays != "") {
		var replays = JSON.parse(localStorage.replays);
		var out = "";
		for (var i = 0; i < replays.length; i++) {
			out = out + "<tr>";
			out = out + "<td>" + replays[i].id  + "</td>";
			out = out + "<td>" + replays[i].time  + "</td>";
			out = out + "<td><a href=\"javascript:startReplay(" + replays[i].id + ")\">Replay</a></td>";
			out = out + "</tr>";
		}
		$("#historyTable").html(out);
	}
}





