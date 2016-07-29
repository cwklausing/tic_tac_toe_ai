//Tic Tac Toe AI Game!

$(function(){
	$('div').on('click', function(){
		alert('click!');
		State();
	})
})
//-----------------GAME CONSTRUCTION-------------------//
var Game = function(autoPlayer) {
	//initialize the ai player for the game
	this.ai = autoPlayer;
	//initialize the game current state
	this.currentState = new State();
	//Define empty board
	this.currentState.board = ['E', 'E', 'E',
							   'E', 'E', 'E'
							   'E', 'E', 'E'];
    //X always plays first
    this.currentState.turn = "X";

    //initialize game status to beginning
    this.status = "beginning";
    this.advanceTo = function(_state) {
    	this.currentState = _state;
    	if(_state.isTerminal()) {
    		this.status = "ended";

    		if(_state.result === "X won") {
    			ui.switchViewTo("won");
    		} else if (_state.result === "O won") {
    			
    		}
    	}
    }
}


//-----------------AI Construction---------------------//
//Constructs the AI player, takes in level of intelligence
var AI = function(difficulty) {
	var levelOfIntelligence = difficulty;
	var game = {};
	function minimaxValue(state){

	}

	function masterMove(turn) {

	}

	//method to specify the game ai player will play
	this.plays = function(_game) {
		game = _game;
	}

	this.notify = function() {
		masterMove(turn);
	}
}

//Constructs an action the AI could make
var AIAction = function(pos) {
	this.movePosition = pos;
	//the minimax value of the state the action will create
	this.minimaxValue = 0;
	this.applyTo = function(state) {
		var next = new State(state);

		next.board[this.movePosition] = state.turn;

		if(state.turn === '0') {
			next.oMovesCount++;
		}
		next.advanceTurn();
		return next;
	}
}

//Public method that makes rule sorting AIAction ascending
AIAction.ASCENDING = function(firstAction, secondAction) {
	if(firstAction.minimaxValue < secondAction.minimaxValue) {
		//Indicates firstAction goes before secondAction
		return -1;
	} else if (firstAction.minimaxValue > secondAction.minimaxValue) {
		//Indicates secondAction goes before firstAction
		return 1;
	} else {
		//Indicates tie
		return 0;
	}
}

AIAction.DESCENDING = function(firstAction, secondAction) {
	if(firstAction.minimaxValue)
}

//Constructs the game state
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