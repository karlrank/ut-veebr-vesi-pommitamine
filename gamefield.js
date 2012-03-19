var field = new Array();
field[0] = new Array(0,0,0,0,0,0,0,0,0,0);
field[1] = new Array(0,0,0,0,0,0,0,0,0,0);
field[2] = new Array(0,0,0,0,0,0,0,0,0,0);
field[3] = new Array(0,0,0,0,0,0,0,0,0,0);
field[4] = new Array(0,0,0,0,0,0,0,0,0,0);
field[5] = new Array(0,0,0,0,0,0,0,0,0,0);
field[6] = new Array(0,0,0,0,0,0,0,0,0,0);
field[7] = new Array(0,0,0,0,0,0,0,0,0,0);
field[8] = new Array(0,0,0,0,0,0,0,0,0,0);
field[9] = new Array(0,0,0,0,0,0,0,0,0,0);

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