const gameBoard = document.getElementById("game-board");
const winnerDisplay = document.getElementById("winner");
const playersDisplay = document.getElementById("players-turn");

class TicBoard {
	constructor() {
		this.tiles = new Array(9).fill("");
		this.circleTurn = true;
		this.playerTurn = this.circleTurn ? "o" : "x";
		this.allWinningSequences = [
			[0, 1, 2],
			[0, 3, 6],
			[0, 4, 8],
			[1, 4, 7],
			[2, 4, 6],
			[2, 5, 8],
			[3, 4, 5],
			[6, 7, 8],
		];
	}

	createBoard() {
		for (var i = 0; i < this.tiles.length; i++) {
			let tile = document.createElement("div");
			tile.id = i;
			tile.classList.add("tile");
			tile.style.width = "80px";
			tile.style.height = "80px";
			gameBoard.append(tile);

			tile.addEventListener("click", (e) => {
				e.preventDefault();
				this.handleClick(e);
			});
		}
	}

	handleClick(e) {
		const tileId = parseInt(e.target.id); // Get the ID of the clicked tile

		if (this.tiles[tileId] !== "") {
			// Check if the tile is already occupied
			console.log(e.target.id);
			this.checkForWin(e);
			return;
		}

		this.tiles[tileId] = this.playerTurn; // Place the player's mark on the tile
		e.target.innerText = this.playerTurn; // Display the player's mark on the tile

		this.playerTurn = this.playerTurn === "o" ? "x" : "o"; // Switch turns
		playersDisplay.innerText =
			this.playerTurn === "x" ? "X's Turn" : "O's Turn";

		this.checkForWin(e);
		console.log(e.target.id);
	}

	checkForWin(e) {
		this.allWinningSequences.map((seq, index) => {
			for (let num of seq) {
			}
		});

		console.log(e.target.innerText);
	}
}

const myBoard = new TicBoard();
myBoard.createBoard();
