//Navigation logic

function toggleHelp() {
	$("#rankings").hide();
	$("#history").hide();
	$("#help").toggle();
}

function toggleRankings() {
	$("#rankingsTable").load("rankings");
	$("#help").hide();
	$("#history").hide();
	$("#rankings").toggle();
}

function toggleHistory() {
	displayReplays();
	$("#help").hide();
	$("#rankings").hide();
	$("#history").toggle();
}

function showPlayField() {
	writeToChat("Place your ships to begin!");
	$("#lobbyButton").show();
	$("#help").hide();
	$("#rankings").hide();
	$("#lobby").hide();
	$("#history").hide();
	$("#playField").show();
	$("#oppField").show();
	$("#chatBox").show();
	$("#confirmButton").show();
}

function clean() {
	$("#lobbyButton").hide();
	$("#help").hide();
	$("#rankings").hide();
	$("#playField").hide();
	$("#oppField").hide();
	$("#chatBox").hide();
	$("#confirmButton").hide();
	$("#chatBox").hide();
	$("#replayControl").hide();
	$("#lobby").show();
}