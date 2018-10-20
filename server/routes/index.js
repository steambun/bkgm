const dice = require('./dice')
const game = require('./game')

module.exports = (router) => {
  dice(router),
  game(router)
}