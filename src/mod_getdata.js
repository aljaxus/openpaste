const app = require('./mod_servers').app
const db = require('./mod_servers').enmap

app.get('/getpaste', (req, res) => {
  if (req.query.pasteid !== null) {
    try {
      const dat = db.get(req.query.pasteid)
      if (dat !== null) {
        res.status(200).send(dat+'')
      } else {
        res.sendStatus(400)
      }
    } catch (error) {
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(400)
  }
})