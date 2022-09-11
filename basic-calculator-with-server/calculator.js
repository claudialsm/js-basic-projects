const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// use url.encoded when retrieving information posted to server in html form
app.use(bodyParser.urlencoded({ extended: true }));

// Send index.html file when the browser tries to access the home route via get request
//__dirname refers to the current folder
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  let val1 = Number(req.body.num1);
  let val2 = Number(req.body.num2);
  let result = val1 + val2;
  res.send('The result of the calculation is ' + result);
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
