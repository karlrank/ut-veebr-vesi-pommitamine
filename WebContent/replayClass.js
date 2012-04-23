
function Replay() {
	this.id = getNewReplayId();;
	this.time = new Date();
	this.moves = new Array();
	this.ships;
	
	this.addMove = function (move) {
		this.moves.push(move);
	};
	
}