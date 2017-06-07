const express = require('express')
const morgan = require('morgan')
const app = express()
var API = '/api/whoami'
app.use(morgan('dev'))



app.get(API, function (req, res) {
    console.log(req)
    var language = req.headers['accept-language']
    console.log(language)
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log(' listening on port 8080....')
})