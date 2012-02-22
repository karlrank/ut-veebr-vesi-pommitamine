//navigatsiooniloogika

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
	$("#gameField").show();
}

function clean() {
	$("#help").hide();
	$("#rankings").hide();
	$("#lobby").hide();
	$("#gameField").hide();
}

function exitGame() {
	clean();
	$("#lobby").show();
	$("#lobbyButton").hide();
}

//joonistamine
function draw(canvas) {	
	var ctx=canvas.getContext("2d");
	var img=new Image();
	img.onload = function(){
	ctx.drawImage(img,545,170);
	};
	img.src="img/play_field.png"
	
	var img_own=new Image();
	img_own.onload = function(){
	ctx.drawImage(img_own,0,0);
	};
	img_own.src="img/own_field.png"
		
	var img2=new Image();
	img2.onload = function(){
	ctx.drawImage(img2,35,35);
	};
	img2.src="img/4sqship.png"
}
