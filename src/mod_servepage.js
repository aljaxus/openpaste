const app = require('./mod_servers').app
const fs = require('fs')

app.get('/(:pasteid([0-9]{13})(\.:syntax([a-z]{1,5})?))?', (req, res) => {
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
