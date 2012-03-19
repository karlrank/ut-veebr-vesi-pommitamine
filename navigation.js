//Navigation logic

function toggleHelp() {
	$("#rankings").hide();
	$("#history").hide();
	$("#help").toggle();
}

function toggleRankings() {
	$("#help").hide();
	$("#history").hide();
	$("#rankings").toggle();
}

function toggleHistory() {
	$("#help").hide();
	$("#rankings").hide();
	$("#history").toggle();
}

function showPlayField() {
	$("#lobbyButton").show();
	$("#help").hide();
	$("#rankings").hide();
	$("#lobby").hide();
	$("#history").hide();
	$("#playField").show();
	$("#oppField").show();
	$("#chatBox").show();
}

function clean() {
	$("#help").hide();
	$("#rankings").hide();
	$("#lobby").hide();
	$("#playField").hide();
	$("#oppField").hide();
	$("chatBox").hide();
}

function exitGame() {
	clean();
	$("#lobby").show();
	$("#lobbyButton").hide();
	$("#chatBox").hide();
}