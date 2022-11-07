const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// we have a module called date
const date = require(__dirname + '/date.js');

const app = express();

// let toDos = ['Buy groceries', 'Cook', 'Eat'];

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
// specify location of public files
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');

const itemsSchema = {
  name: String,
};

const Item = mongoose.model('Item', itemsSchema);

// Create new document from Item model
const item1 = new Item({
  name: 'Welcome to your todolist!',
});

const item2 = new Item({
  name: 'Hit the + button to add a new item.',
});

const item3 = new Item({
  name: '<-- Hit this to delete an item.',
});

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully saved default items to database.');
  }
});

app.get('/', function (req, res) {
  // // call date function
  // let day = date.getDay();

  res.render('list', { listTitle: 'Today', newListItems: toDos });
  // res.render('list', { kindofDay: day, newListItems: toDos });
});

app.post('/', function (req, res) {
  const item = req.body.newItem;
  toDos.push(item);

  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
