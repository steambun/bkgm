import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class RollButton extends React.Component{

  constructor(props){
    super(props);
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    console.log('Tell Web Server to Roll Dice');
    fetch('/api/rolldice')
      .then(res=>res.json())
      .then(json=>{this.props.onDiceRoll(json.dice)})
  }

  render() {
    return (
      <div className="component-rollbutton">
      <button 
        onClick={this.rollDice}
        className="rollButton" >ROLL DICE</button>
      </div>
    );
  }     
}

class Dice extends React.Component{
 
  // Require is needed for statis imports
  renderDiceImage(die,index){
    var imageName = require('./images/dice'+die+'.png')

    return (
        <img key={index} src={imageName} height="42" width="42" alt="dice"/> 
      );
  }

  renderDice(dice){
    return dice.map(
      (die,index) => 
        {return this.renderDiceImage(die,index);})
  }

  render() {
    return (
      <div className="component-dice">
        {this.renderDice(this.props.dice)}
      </div>
    );
  }     
}

class CheckerWhite extends React.Component{
  render(){

    return (
      <button  className="checker-white"/>
    );
  }
}

class CheckerRed extends React.Component{
  render(){

    return (
      <button  className="checker-red"/>
    );
  }
}

class Point extends React.Component{

  constructor(props){
    super(props);
    this.index = this.props.index;
    this.checkers = this.props.checkers;
  }

  renderCheckers(shouldInvert){
    var white = this.checkers.white;
    var red = this.checkers.red;
    var checkerList=[];

    for(let w=0;w<white;w++){
      checkerList.push(<CheckerWhite  key={'white-checker:'+w}/>);
    }
    for(let r=0;r<red;r++){
        checkerList.push(<CheckerRed  key={'red-checker:'+r}/>);
    }
    return checkerList;
  }

  render(){ 
    // invert the top row
    var shouldInvert = this.index >=11;
    var invert = 'none';
    if(shouldInvert){
      invert = 'rotate(180deg)';
    }

    // colour even indexes different to odd
    var pointColour = '300px solid rgb(218, 174, 94)';
    if(this.index%2===0){
      pointColour = '300px solid rgb(0, 0, 0)';
    }

    var pointStyle = {
      borderBottom: pointColour,
      transform: invert,
      width: 0,
      height: 300,
      borderRight: '30px solid transparent',
      borderLeft: '30px solid transparent',
      padding: 0,
      outline: 'none'
    };
 
    return (
      <div className="component-point">
      
      <button 
        className="point" 
        style = {pointStyle}
      />
      {this.renderCheckers(shouldInvert)}      
      
      </div>
    );
  }
}

class BackGammonBoard extends React.Component{

    constructor(props){
      super(props);
      this.gameState = [
          {white:2,red:0},{white:0,red:0},{white:0,red:0},{white:0,red:0},{white:0,red:0},{white:0,red:5},
          {white:0,red:0},{white:0,red:3},{white:0,red:0},{white:0,red:0},{white:0,red:0},{white:5,red:0},
          {white:0,red:5},{white:0,red:0},{white:0,red:0},{white:0,red:0},{white:3,red:0},{white:0,red:0},
          {white:5,red:0},{white:0,red:0},{white:0,red:0},{white:0,red:0},{white:0,red:0},{white:0,red:2}
        ];
    }

    render(){
      return (
        <div className="component-backgammonboard">
          <div className="points-top">
          <Point index="12" checkers={this.gameState[12]}></Point>
            <Point index="13" checkers={this.gameState[13]}></Point>
            <Point index="14" checkers={this.gameState[14]}></Point>
            <Point index="15" checkers={this.gameState[15]}></Point>
            <Point index="16" checkers={this.gameState[16]}></Point>
            <Point index="17" checkers={this.gameState[17]}></Point>
            <Point index="18" checkers={this.gameState[18]}></Point>
            <Point index="19" checkers={this.gameState[19]}></Point>
            <Point index="20" checkers={this.gameState[20]}></Point>
            <Point index="21" checkers={this.gameState[21]}></Point>
            <Point index="22" checkers={this.gameState[22]}></Point>
            <Point index="23" checkers={this.gameState[23]}></Point>
          </div>
          <div className="points-bottom">
            <Point index="11"checkers={this.gameState[11]}></Point>
            <Point index="10"checkers={this.gameState[10]}></Point>
            <Point index="9" checkers={this.gameState[9]}></Point>
            <Point index="8" checkers={this.gameState[8]}></Point>
            <Point index="7" checkers={this.gameState[7]}></Point>
            <Point index="6" checkers={this.gameState[6]}></Point>
            <Point index="5" checkers={this.gameState[5]}></Point>
            <Point index="4" checkers={this.gameState[4]}></Point>
            <Point index="3" checkers={this.gameState[3]}></Point>
            <Point index="2" checkers={this.gameState[2]}></Point>
            <Point index="1" checkers={this.gameState[1]}></Point>
            <Point index="0" checkers={this.gameState[0]}></Point>
            </div>
          </div>
        );
    }
}

class BackGammon extends React.Component {

  constructor(props){
    super(props);
    this.state = {dice : [1,1]};

    this.onDiceRolled = this.onDiceRolled.bind(this);
  }

  onDiceRolled(rolledDice) {
    this.setState({
      dice:rolledDice});
    console.log('BackGammon noticed dice was rolled ('+
      rolledDice.join(','));
  }

  render() {
    return (
      <div className="component-backGammon">
        <RollButton 
          onDiceRoll={this.onDiceRolled}>
        </RollButton>
        <Dice 
          dice={this.state.dice}>
        </Dice>
        <BackGammonBoard/>
      </div>
    );
  }
}

ReactDOM.render(
  <BackGammon />,
  document.getElementById('root')
);
