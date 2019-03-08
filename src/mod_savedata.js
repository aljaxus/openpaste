const app = require('./mod_servers').app
const db = require('./mod_servers').enmap
const fs = require('fs')


app.post('/paste', (req, res) => {
  if (req.params.content !== null) {
    const nowms = (new Date).getTime()
    console.log(nowms)
    try {
      db.set(nowms, req.params.content+'')
      res.status(200).send(nowms+'')
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(400)
  }
})

// app.get('/:filename.:extension([a-z]{1,5})', (req, res) => {
//   res.send('Pretend that you\'re so happy with the data you should see here. '+JSON.stringify(req.params))
// })
