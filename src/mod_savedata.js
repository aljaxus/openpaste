const app = require('./mod_servers').app
const db = require('./mod_servers').enmap


app.post('/paste', (req, res) => {
  try {
    const content = req.body.content
    if (content!==null && content!==undefined) {
      const nowms = (new Date).getTime()
      db.set(nowms, (typeof content==='object'?JSON.stringify(content,null,2):content))
      console.log(`Saved new paste:\n  ID: ${nowms+''}\n  Size: ${req.headers['content-length']/8}B`)
      res.status(200).send(nowms+'')
    } else {
      res.sendStatus(400)
    }
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// app.get('/:filename.:extension([a-z]{1,5})', (req, res) => {
//   res.send('Pretend that you\'re so happy with the data you should see here. '+JSON.stringify(req.params))
// })
