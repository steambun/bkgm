/** server/controllers/dice.ctrl.js*/

module.exports ={
  rollDice: (req,res, next)=>{
    console.log(`Roll Dice Request Received`);
    var d1 = Math.floor((Math.random() * 6) + 1);
    var d2 = Math.floor((Math.random() * 6) + 1);
    console.log(`Rolled a `+d1+` and a `+d2);
    return res.json({"dice1":d1,"dice2":d2});
  }
}