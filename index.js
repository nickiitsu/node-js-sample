/*var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

app.get('/webhook', function(req, res) {
    res.sendStatus(200)
})
*/
var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()


app.post('/webhook', (req, res) => {

  res.sendStatus(200)
})

