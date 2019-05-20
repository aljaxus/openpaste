const express = require('express')
const bodyParser = require("body-parser")
const getip = require('./mod_getip')
const Enmap = require("enmap");

const app = express()
  .use(express.static('./public'))
  .use(bodyParser.json({limit: '3mb'}))
  
const db = new Enmap({
  name: "pastes",
  fetchAll: true,
  autoFetch: true
});

db.defer.then( () => {
  console.log('-> enMap database is ready')
  app.listen(8080, '0.0.0.0' , () => {
    console.log('-> Paste server has started on '+'http://'+getip.getLocalIP4()+':8080')
    if (process.env.ENV==='production') console.log('Press crtl+p & crtl+q to detach from container console')
  })
})


module.exports = {
  app: app,
  enmap: db
}