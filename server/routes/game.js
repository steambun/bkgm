// server/routes/game.js
const gamecontroller = require('./../controllers/game.ctrl')

module.exports = (router) =>{

  /**
   * new game request
   */
  router
    .route('/newgamerequest')
    .get(gamecontroller.newGameRequest)
}