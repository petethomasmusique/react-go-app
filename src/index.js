import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// ========================================

function Square(props) {
	return (
		<button className="square" onClick={props.onClick}> 
			<div className={props.squareState}></div>
		</button>
	);
}
// ========================================
class Board extends React.Component {
	constructor(props) {
		super(props); // have to pass in props if you want to use them in the constructor
		this.state = {
			squares: Array(Math.pow(this.props.size, 2)).fill(null), // make an array of size*size to represent the state of the board.
			blackIsNext: true,
		}
	}

	handleClick(i) {
	    const squares = this.state.squares.slice(); // make a copy of the array
	    if (squares[i]) {
	    	return;
	    }
	    squares[i] = this.state.blackIsNext ? 'black' : 'white';
	    this.setState({
	    	squares: squares, 
	    	blackIsNext: !this.state.blackIsNext,
	    });
	}

	renderSquare(i) {
		return (
			<Square 
				squareState={this.state.squares[i]} 
				onClick={() => this.handleClick(i)}	
				key={i}
			/>
		);
	}
	renderRow(rowIndex) {
		var row = []; // create an empty array of squares
		for (var i = 0; i < this.props.size; i++) { // as long as index is less that number of columns
			let squareIndex = i + (this.props.size * rowIndex); // get an index for the square (i + 0 = row 1, 1 + 19 = row 2...)
  			row.push(this.renderSquare(squareIndex)); // push a rendered square onto the array
		}		
		return (
		   	<div className="board-row" key={rowIndex}>
		   		{row}
		   	</div>
		);
	}
	render() {
		var board = [];
		for (var i = 0; i < this.props.size; i++) { // as long as index is less that number of columns
  			board.push(this.renderRow(i)); // push a rendered row onto the array
		}
		return (
			<div className="board">
				{board}
			</div>
		)
	}
}
// ========================================
class Game extends React.Component {
	render() {
		return(
        <div className="game-board">
          <Board size="10"/>
        </div>
		);
	}
}
// ========================================
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);