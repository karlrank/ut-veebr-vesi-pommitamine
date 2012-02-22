
function toggleHelp() {
	$("#rankings").hide();
	$("#help").toggle();
}

function toggleRankings() {
	$("#help").hide();
	$("#rankings").toggle();
}

function showPlayField() {
	$("#lobbyButton").show();
	$("#help").hide();
	$("#rankings").hide();
	$("#lobby").hide();
	$("#playField").show();
	$("#oppField").show();
	$("#chatBox").show();
	$("#shipBox").show();
}

function clean() {
	$("#playField").hide();
	$("#oppField").hide();
	$("#chatBox").hide();
	$("#help").hide();
	$("#rankings").hide();
	$("#lobby").hide();
	$("#shipBox").hide();
}

function exitGame() {
	clean();
	$("#lobby").show();
	$("#lobbyButton").hide();
}
