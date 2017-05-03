var express = require('express')
/*var bodyParser = require('body-parser')
var request = require('request')*/
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!www')
})

/*app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/
app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})

/*

app.use(bodyParser.json())

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/webhook', function(req, res) {
  var text = req.body.events[0].message.text
  var sender = req.body.events[0].source.userId
  var replyToken = req.body.events[0].replyToken
  console.log(text, sender, replyToken)
  console.log(typeof sender, typeof text)
  // console.log(req.body.events[0])
  if (text === 'สวัสดี' || text === 'Hello' || text === 'hello') {
    sendText(sender, text)
  }
  res.sendStatus(200)
})

function sendText (sender, text) {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
        text: 'สวัสดีค่ะ เราเป็นผู้ช่วยปรึกษาด้านความรัก สำหรับหมามิ้น 💞'
      }
    ]
  }
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Bearer {'+zZRwehzcl2nnalC+aAVyrF4SSIaZBfR3NWuhjnkiauU5LV24oQcqQfyO5DSHe//A1br67NIP2wGE9eoe4VEDeWANsUDa5iN3VJ/cZK7fOinYmRYi40Wyte09bpRo4l4LBTGTCoIYXDmDipie0lSiAdB04t89/1O/w1cDnyilFU='}
    },
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    body: data,
    json: true
  }, function (err, res, body) {
    if (err) console.log('error')
    if (res) console.log('success')
    if (body) console.log(body)
  })
}


*/
