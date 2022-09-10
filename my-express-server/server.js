const express = require('express');
const app = express();

// What if people come to home page
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
}); // when get request is made to home root

// What if people go to contact page
app.get('/contact', function (req, res) {
  res.send('Contact me at abc@gmail.com');
});

app.get('/about', function (req, res) {
  res.send('This should be a brief bio of who owns this website');
});

app.get('/hobbies', function (req, res) {
  res.send('<ul><li>Coffee</li><li>Code</li><ul>');
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
