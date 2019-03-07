const express = require('express')
const getip = require('./mod_getip')

const app = express().use(express.static('./pastes'))
const index = 

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:filename.:extension([a-z]{1,5})', (req, res) => {
  res.send('Pretend that you\'re so happy with the data you should see here. '+JSON.stringify(req.params))
})


const appServer = app.listen(8101,'0.0.0.0' , () => {
  console.log('\n-> Paste server has started on '+'http://'+getip.getLocalIP4()+':8101')
})