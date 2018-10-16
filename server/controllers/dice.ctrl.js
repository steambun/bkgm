/** server/controllers/dice.ctrl.js*/

module.exports ={
  rollDice: (req,res, next)=>{
    console.log(`Roll Dice Request Received`);
    return res.json({msg:"Rolled Dice"})
  }
}