const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

console.log('Connected successfully to server');

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please check your data entry, no name specified!'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// The collection name 'Fruit' in singular form, would be converted to plural by mongoose
const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  //   name: 'Apple',
  rating: 10,
  review: 'Sweet and delicious.',
});

// Each save will insert the fruit into the collection. Comment out fruit.save() if you don't want to insert multiple apples into your collection
// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model('Person', personSchema);

const pineapple = new Fruit({
  name: 'Pineapple',
  score: 9,
  review: 'Sour and sweet',
});

pineapple.save();

const person = new Person({
  name: 'Amy',
  age: 12,
  favouriteFruit: pineapple,
});

// const person = new Person({
//   name: 'John',
//   age: 37,
// });

person.save();

const orange = new Fruit({
  name: 'Orange',
  score: 6,
  review: 'Kinda sour',
});

const banana = new Fruit({
  name: 'Banana',
  score: 9,
  review: 'Great stuff!',
});

Specify name of mongoose model indicating relevant collection and schema
Fruit.insertMany([orange, banana], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully saved all the fruits to fruitsDB');
  }
});

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // Good practice to close connection
    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

Fruit.updateOne(
  { _id: '6329ab3148e6d6777571c0b4' },
  { name: 'Peach' },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully updated the document.');
    }
  }
);

Fruit.deleteOne({ name: 'Peach' }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully deleted the document');
  }
});

Person.deleteMany({ name: 'John' }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully deleted all the document');
  }
});
