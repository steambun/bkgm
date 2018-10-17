// server/routes/dice.js
const dicecontroller = require('./../controllers/dice.ctrl')

module.exports = (router) =>{

  /**
   * roll the dice
   */
  router
    .route('/rolldice')
    .get(dicecontroller.rollDice)
}