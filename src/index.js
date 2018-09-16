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

  renderPoint(i) {
    return <button className="point"></button>;
  }

  render() {
    return (
      <div className="component-backgammonboard">
      <div className="points-top">
        <div className="points-topleft">
          {this.renderPoint(6)}
          {this.renderPoint(7)}
          {this.renderPoint(8)}
          {this.renderPoint(9)}
          {this.renderPoint(10)}
          {this.renderPoint(11)}
        </div>
        <div className="points-topright">
          {this.renderPoint(0)}
          {this.renderPoint(1)}
          {this.renderPoint(2)}
          {this.renderPoint(3)}
          {this.renderPoint(4)}
          {this.renderPoint(5)}
        </div>
        </div>
        <div className="points-bottom">
        <div className="points-bottomleft">
          {this.renderPoint(12)}
          {this.renderPoint(13)}
          {this.renderPoint(14)}
          {this.renderPoint(15)}
          {this.renderPoint(16)}
          {this.renderPoint(17)}
        </div>
        <div className="points-bottomright">
          {this.renderPoint(18)}
          {this.renderPoint(19)}
          {this.renderPoint(20)}
          {this.renderPoint(21)}
          {this.renderPoint(22)}
          {this.renderPoint(23)}
        </div>
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
