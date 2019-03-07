const express = require('express')
const getip = require('./mod_getip')

const expressApp = express().use(express.static('./pastes'))

const appServer = expressApp.listen(8101,'0.0.0.0' , () => {
  const addr = 'http://'+getip.getLocalIP4()+':8100'
  console.log('\n-> Server has started\n  |_ Console  @ '+addr+'/console.html\n  |_ Roulette @ '+addr+'/roulette.html\n\n\n')
  eventEmitter.emit('runRoulette')
})