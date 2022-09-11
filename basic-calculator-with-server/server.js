const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/bmicalculator', function (req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function (req, res) {
  let w = Number(req.body.weight);
  let h = Number(req.body.height);
  let bmi = w / h ** 2;
  res.send(`
  <h1>BMI Calculator</h1>
  The calculated BMI is ${bmi}`);
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
