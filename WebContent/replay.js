
if (localStorage.replayID == undefined) {
	localStorage.replayID = "1";
}

if (localStorage.replays == undefined) {
	localStorage.replays = JSON.stringify(new Array());
}

var moves, loc, playing;

function addReplay(replay) {
		var replays = JSON.parse(localStorage.replays);
		replays.push(replay);
		localStorage.replays = JSON.stringify(replays);	
}

function displayMove(move) {
	console.log(move);
}

function pauseReplay() {
	playing = 0;
}

function playReplay() {
	playing = 1;
	reallyPlay();
}

function reallyPlay() {
	loc = loc + 1;
	move = moves[loc];
	displayMove(move);
	if (playing == 1) {
		setTimeout("reallyPlay()", 1000);
	}
}

function startReplay(id) {
	showPlayField();
	var replays = JSON.parse(localStorage.replays);
	
	for ( var i = 0; i < replays.length; i++) {
		if (replays[i].id == id) {
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





