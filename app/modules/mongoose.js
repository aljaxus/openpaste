console.log(`
  + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  '
  '  MODULE mongoose: loaded module mongoose.js
  '
  + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
`)

const mongoosepkg = require('mongoose')

const mongoose = mongoosepkg.connect('mongodb://mongodb:27017/openpaste', { 
  useNewUrlParser: true, 
  socketTimeoutMS: 60000,
  keepAlive: 1000
})

if (!mongoose) { throw mongoose }
else { console.log(`
  + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  '
  '  MODULE mongoose: successfully connected to MongoDB server
  '
  + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
`) }

module.exports = mongoose