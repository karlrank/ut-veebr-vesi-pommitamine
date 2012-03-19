function writeToChat(text) {
	$("#chatField").append(">" + text + "<br />");
	$("#chatField").scrollTop(document.getElementById("chatField").scrollHeight)
}

function clickConfirm() {
	if(finalizeShips(generateShips(server.ownField))) {
		writeToChat("Game is oN!");
		$("#confirmButton").hide();
	}
	else {
		writeToChat("Ships not placed correctly");
	}
}

$(document).ready(function() {
	server = new Server(); //initialize server object
	
	$("#playField td").click(function(event){
		td = event.target;
		if (server.ownField[td.parentElement.rowIndex - 1][td.cellIndex - 1] == 1){
			server.ownField[td.parentElement.rowIndex - 1][td.cellIndex - 1] = 0;
			server.confirmShips();
		}
		else if (server.ownField[td.parentElement.rowIndex - 1][td.cellIndex - 1] == 0) {
			server.ownField[td.parentElement.rowIndex - 1][td.cellIndex - 1] = 1;
			if(!server.confirmShips()) {
				server.ownField[td.parentElement.rowIndex - 1][td.cellIndex - 1] = 0;
				writeToChat("Illegal ship placement!");
			}
		}
	})
	
	$("#oppField td").click(function(event){
		td = event.target;
		if (td.cellIndex!=0 & td.parentElement.rowIndex!=0){ //if correct square is clicked
			if(server.ready()) {
				var shot = server.registerShot(new Array((td.parentElement.rowIndex - 1),(td.cellIndex - 1)));
				if (shot == 0) {
					writeToChat("Shot didn't hit");
				}
				else if (shot == 1) {
					writeToChat("Shot hit, new turn");
				}
				else if (shot == 3) {
					writeToChat("Ship sunk, new shot!");
				}
				else {
					writeToChat("Square already shot, try again.");
				}
			}
			else {
				writeToChat("Not your turn");
			}
		}
	});
	
});
