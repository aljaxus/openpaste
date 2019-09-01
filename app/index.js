const express = require('express')
const bodyparser = require('body-parser')
const db = require('./modules/db')

require('./modules/mongoose')

const app = express()
  .use(express.static('./public'))
  .use(bodyparser.json({limit: '3mb'}))

app.get('/', (req, res) => res.render('home.ejs') )

app.get('/:pasteid([a-zA-Z0-9]{24})', async (req, res) => {
  const paste = await db.get(req.params.pasteid)
  res.render('read.ejs', { 
    content: paste.content, 
    pasteid: req.params.pasteid 
  })
})

app.get('/raw/:pasteid([a-zA-Z0-9]{24})', async (req, res) => {
  const paste = await db.get(req.params.pasteid)
  res.status(paste.status)
    .type('text/plain')
    .send(paste.content)
})

app.post('/paste', async (req, res) => {
  try {
    
    const content = req.body.content
    if ( content ) {
      const pasteid = await db.create(content)
      if (pasteid) {
        res.status(200)
          .set('Content-Type', 'text/html')
          .send(pasteid + '')
      } else { res.sendStatus(500) }
    } else { res.sendStatus(400) }

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

app.listen(80, '0.0.0.0', () => {
  console.log(`
  + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  '
  '  Openpaste server has started listening on port 80
  '  The port 80 is proxied by docker to post 8101 on the host machine
  '
  + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
`)
})
