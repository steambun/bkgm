import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================
// TIC TAC TOE CODE
function Square(props){
  return(
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares:Array(9).fill(null),
      xIsNext : true,
    }
  }

  handleClick(i){
    const squares=this.state.squares.slice();
    if(calculateWinner(squares)|| squares[i]){
      return;
    }

    squares[i]=this.state.xIsNext?'X':'O';
    this.setState(
      {squares:squares,
      xIsNext:!this.state.xIsNext,}
    );
  }

  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]}
      onClick={()=>this.handleClick(i)}
    />;
  }

  render() {

    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = 'Winner: '+winner;
    }
    else{
      status = 'Next player: '+(this.state.xIsNext?'X':'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        
      </div>
    );
  }
}

// ========================================
// BACKGAMMON CODE

class BackGammonBoard extends React.Component {

  renderUpwardsPoint(i) {
    return <button className="upwardsPoint"></button>;
  }

  renderDownwardsPoint(i) {
    return <button className="downwardsPoint"></button>;
  }

  render() {
    return (
      <div>
        <div className="points-topleft">
          {this.renderDownwardsPoint(0)}
          {this.renderDownwardsPoint(1)}
          {this.renderDownwardsPoint(2)}
          {this.renderDownwardsPoint(3)}
          {this.renderDownwardsPoint(4)}
          {this.renderDownwardsPoint(5)}
        </div>
        <div className="points-bottomleft">
          {this.renderUpwardsPoint(6)}
          {this.renderUpwardsPoint(7)}
          {this.renderUpwardsPoint(8)}
          {this.renderUpwardsPoint(9)}
          {this.renderUpwardsPoint(10)}
          {this.renderUpwardsPoint(11)}
        </div>
      </div>
    );
  }
}

class BackGammon extends React.Component {
  render(){
    return(
      <div className="backGammon">
        <button className="checker"></button>
        <div className="backGammon-board">
          <BackGammonBoard />
        </div>
      </div>
    );
  }
}



ReactDOM.render(
  <BackGammon />,
  document.getElementById('root')
);
