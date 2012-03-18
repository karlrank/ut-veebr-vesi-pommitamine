window.onload = function(){
		console.log("loaded");
        };
$(document).ready(function() {
	$("#playField td").click(function(event){
		td = event.target;
		if (td.cellIndex!=0 & td.parentElement.rowIndex!=0){
			if ($(td).css("background-color")=="rgb(255, 255, 255)"){
				$(td).css("background-color", "")
			}
			else {
				$(td).css("background-color", "#FFFFFF")
			}
			//console.log(td.cellIndex +","+ td.parentElement.rowIndex)
		}
	});
});