$(document).ready(function() {
	server = new Server(); //initialize server object
	
	$("#playField td").click(function(event){
		td = event.target;
		if (td.cellIndex!=0 & td.parentElement.rowIndex!=0){ //if correct square is clicked
			server.ownField[td.parentElement.rowIndex - 1][td.cellIndex - 1] = 1;
			confirmShipPlacement(true);
		}
	});
});