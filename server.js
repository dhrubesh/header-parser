const express = require('express')
const morgan = require('morgan')
const app = express()
var API = '/api/whoami'
app.use(morgan('dev'))



app.get(API, function (req, res) {
    console.log(req)
    // console.log(res)
    var language = req.headers['accept-language'].split(',');
    var userAgent = req.headers['user-agent']
    var host = req.headers.host
    res.json({
        language : language[0],
        software : userAgent,
        ipaddress : host
    });
})

app.listen(8080, function () {
  console.log(' listening on port 8080....')
})