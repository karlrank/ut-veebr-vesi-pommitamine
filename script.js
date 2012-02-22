
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
}

function clean() {
	$("#playField").hide();
	$("#oppField").hide();
	$("#chatBox").hide();
	$("#help").hide();
	$("#rankings").hide();
	$("#lobby").hide();
}

function exitGame() {
	clean();
	$("#lobby").show();
	$("#lobbyButton").hide();
}