window.onload = function(){
		console.log("loaded");
        };
$(document).ready(function() {
	$("#playField td").click(function(event){
		td = event.target;
		$(td).css("background-color", "#FFFFFF")
		//console.log(td.cellIndex +","+ td.parentElement.rowIndex)
		});
});