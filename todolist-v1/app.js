const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

let toDos = ['Buy groceries', 'Cook', 'Eat'];

app.get('/', function (req, res) {
  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  let day = today.toLocaleDateString('en-US', options);

  res.render('list', { kindofDay: day, newListItems: toDos });
});

app.post('/', function (req, res) {
  const item = req.body.newItem;
  toDos.push(item);

  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
