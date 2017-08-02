import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// ========================================
class Square extends React.Component {
	render() {
		return ( // TODO does the each square need a key?
			<button className="square"> 
				{this.props.squareIndex}
			</button>
		);
	}
}
// ========================================
class Row extends React.Component {
	renderSquare(i) {
		return <Square squareIndex={i}/>;
	}
	render() {
		var row = []; // create an empty array of squares
		for (var i = 0; i < 19; i++) { // as long as index is less that number of columns (TODO don't hardcode size of board)
			let squareIndex = i + (19 * this.props.rowIndex); // get an index for the square (i + 0 = row 1, 1 + 19 = row 2...)
  			row.push(this.renderSquare(squareIndex)); // push a rendered square onto the array
		}		
		return (
		   <div className="board-row">
		    {row}
		   </div>
		);
	}
}
// ========================================
class Board extends React.Component {
	renderRow(i) {
		return <Row rowIndex={i} />;
	}

	render() {
		return(
      	<div>
        	{this.renderRow(0)}
       	</div>
		);
	}
}
// ========================================
class Game extends React.Component {
	render() {
		return(
        <div className="game-board">
          <Board />
        </div>
		);
	}
}
// ========================================
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);