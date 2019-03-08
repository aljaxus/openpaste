const express = require('express')
const getip = require('./mod_getip')
const Enmap = require("enmap");

const app = express().use(express.static('./public'))
const db = new Enmap({
  name: "pastes",
  fetchAll: true,
  autoFetch: true
});

db.defer.then( () => {
  console.log('-> enMap database is ready')
  app.listen(8101, '0.0.0.0' , () => {
    console.log('-> Paste server has started on '+'http://'+getip.getLocalIP4()+':8101')
  })
})


module.exports = {
  app: app,
  enmap: db
}