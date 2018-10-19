/** server/controllers/dice.ctrl.js*/

module.exports ={
  rollDice: (req,res, next)=>{
    console.log(`Roll Dice Request Received`);
 
    var dice1=Math.floor(Math.random() *(6)+1);
    console.log(dice1);
    
    var dice2=Math.floor(Math.random() *(6)+1);
    console.log(dice2);
    
    return res.json({"dice1":dice1,"dice2":dice2})
    
 }
}