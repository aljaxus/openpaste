let express = require('express')
let app = express()


app.listen(80, '0.0.0.0', () => {
  console.log('Openpaste server has started!')
})