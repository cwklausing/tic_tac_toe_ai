//Tic Tac Toe AI Game!

$(function(){
	$('div').on('click', function(){
		alert('click!');
		State();
	})
})

var State = function(old) {
	this.turn;
	this.result = null;
	this.board = [];
/*Object construction*/
	if(typeof old !== 'undefined') {
		var boardLength = old.board.length;
		this.board = new Array(len);
		for(var i = 0; i < len; i++) {
			this.board[i] = old.board[i];
		}
		this.oMovesCount = old.oMovesCount;
		this.result = old.result;
		this.turn = old.turn;
	}

	//Check whose turn it was, change turn to other player
	this.nextTurn = function() {
		this.turn = this.turn === 'X' ? 'O' : 'X';
	}

	this.countEmpty = function() {
		var eCount = [];
		for(var i = 0; i < 9; i++) {
			if(this.board[i] === 'E') {
				eCount.push(i);
			}
		}
		return eCount;
	}

	//Checks if someone won (aka if the board is in a terminal state)
	this.gameOver = function() {
		var board = this.board;

		//loop to check for terminal state on rows
		for(var i = 0; i < 7; i += 3) {
			if(board[i] !== 'E' && board[i] === board[i + 1] && board[i] === board[i + 2]) {
				this.result = board[i] + ' won!';
				return true;
			}
		}

		//loop to check for terminal state in columns
		for(var i = 0; i < 3; i++) {
			if(board[i] !== 'E' && board[i] === board[i + 3] && board[i] === board[i + 6]) {
				this.reselt = board[i] + ' won!';
				return true;
			}
		}

		//if statement to check for terminal state in diagonals
		//diagonal 1
		if(board[4] !== 'E' && board[4] === board[0] && board[4] === board[8]) {
			this.result = board[i] + ' won!';
			return true;
		} else if (board[4] !== 'E' && board[4] === board[2] && board[4] === board[6]){
			this.result = board[i] + ' won!';
			return true;
		}

		var available = this.countEmpty();
		if(available.length === 0) {
			//then the game is drawn
			this.result = 'draw';
			return true;
		} else {
			return false;
		}
	}
}