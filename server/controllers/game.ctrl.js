/** server/controllers/game.ctrl.js*/

module.exports ={
  newGameRequest: (req,res, next)=>{
    console.log(`New Game Request Received`); 
    
    return res.json({"answer":"yes"})
 }
}
//say yes or no