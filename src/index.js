import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Dice extends React.Component{
 
  // Require is needed for statis imports
  renderDice(i){
    var imageName = require('./images/dice'+i+'.png')

    return (
        <img src={imageName} height="42" width="42" alt="dice"/> 
      );
  }

  render() {
    return (
      <div className="component-dice">
      {this.renderDice(2)}
      {this.renderDice(6)}
      </div>
    );
  }
       
}

class BackGammonBoard extends React.Component {

  renderPoint(i) {
    return <button className="point"></button>;
  }

  render() {
    return (
      <div className="component-backgammonboard">
      <button className="rollButton">ROLL DICE</button>
      <Dice></Dice>
      <button className="checker"></button>
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
