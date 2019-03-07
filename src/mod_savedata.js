const express = require('express')
const getip = require('./mod_getip')
const fs = require('fs')

const app = express().use(express.static('./pastes'))

app.get('/', (req, res) => {
  fs.readFile("./src/index.html", (err, data) => {
    if (err === null) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    } else {
      res.send('An error occured!')
    }
  })
})

app.post('/paste', (req, res) => {
  if (req.params.content !== null) {
    const nowms = (new Date).getTime()
    console.log('nowms')
    fs.writeFile('./pastes/'+nowms, req.params.content, function(err) {
      if (err) { 
        console.log(err)
        res.sendStatus(500) 
      } else {
        res.send(nowms+'')
      }
    })
  } else {
    res.status(400)
  }
})

app.get('/:filename.:extension([a-z]{1,5})', (req, res) => {
  res.send('Pretend that you\'re so happy with the data you should see here. '+JSON.stringify(req.params))
})


const appServer = app.listen(8101,'0.0.0.0' , () => {
  console.log('\n-> Paste server has started on '+'http://'+getip.getLocalIP4()+':8101')
})