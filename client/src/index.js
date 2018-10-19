import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { UV_UDP_REUSEADDR } from 'constants';


class RollButton extends React.Component{

  constructor(props){
    super(props);
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    console.log('Tell Web Server to Roll Dice');
    fetch('/api/rolldice')
      .then(res=>res.json())
      .then(json=>{this.props.onDiceRoll(json.dice1,json.dice2)})
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
  renderDice(i){
    var imageName = require('./images/dice'+i+'.png')

    return (
        <img src={imageName} height="42" width="42" alt="dice"/> 
      );
  }

  render() {
    return (
      <div className="component-dice">
      {this.renderDice(this.props.dice1)}
      {this.renderDice(this.props.dice2)}
      </div>
    );
  }     
}

class Point extends React.Component{

  constructor(props){
    super(props);
    this.index = this.props.index;
  }

  render(){ 
    // invert the top row
    var invert = 'none';
    if(this.index <12){
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
      <button 
        className="point" 
        style = {pointStyle}
      />
    );
  }
}

class BackGammonBoard extends React.Component{

    render(){
      return (
        <div className="component-backGammonBoard">
          <button className="checker"></button>
          <div className="points-top">
            <Point index="0"></Point>
            <Point index="1"></Point>
            <Point index="2"></Point>
            <Point index="3"></Point>
            <Point index="4"></Point>
            <Point index="5"></Point>
            <Point index="6"></Point>
            <Point index="7"></Point>
            <Point index="8"></Point>
            <Point index="9"></Point>
            <Point index="10"></Point>
            <Point index="11"></Point>
          </div>
          <div className="points-bottom">
            <Point index="12"></Point>
            <Point index="13"></Point>
            <Point index="14"></Point>
            <Point index="15"></Point>
            <Point index="16"></Point>
            <Point index="17"></Point>
            <Point index="18"></Point>
            <Point index="19"></Point>
            <Point index="20"></Point>
            <Point index="21"></Point>
            <Point index="22"></Point>
            <Point index="23"></Point>
            </div>
          </div>
        );
    }
}

class BackGammon extends React.Component {

  constructor(props){
    super(props);
    this.state = {dice1 : 1,dice2 : 1};

    this.onDiceRolled = this.onDiceRolled.bind(this);
  }

  onDiceRolled(rolledDice1,rolledDice2) {
    this.setState({
      dice1:rolledDice1,
      dice2:rolledDice2});
    console.log('BackGammon noticed dice was rolled ('+rolledDice1+")("+rolledDice2+")");
  }

  render() {
    return (
      <div className="component-backGammon">
        <RollButton 
          onDiceRoll={this.onDiceRolled}>
        </RollButton>
        <Dice 
          dice1={this.state.dice1}
          dice2={this.state.dice2}>
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
