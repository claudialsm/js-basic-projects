// This section (line 2-5) replaces the code in line 6 to 30
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

console.log('Connected successfully to server');
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// //Database name
// const dbName = 'fruitsDB';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the server
// client.connect(function (err) {
//   assert.equal(null, err);
//   console.log('Connected successfully to server');

//   const db = client.db(dbName);
//   // only close database after insert is done
//   //   insertDocuments(db, function () {
//   findDocuments(db, function () {
//     client.close();
//   });
//   //   });
// });

// This section (line 33-37) replaces the code in line 50 to 70
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// The collection name 'Fruit' in singular form, would be converted to plural by mongoose
const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: 'Apple',
  rating: 7,
  review: 'Pretty solid as a fruit.',
});

// Each save will insert the fruit into the collection. Comment out fruit.save() if you don't want to insert multiple apples into your collection
// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: 'John',
  age: 37,
});

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

// Specify name of mongoose model indicating relevant collection and schema
Fruit.insertMany([orange, banana], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully saved all the fruits to fruitsDB');
  }
});

// const insertDocuments = function (db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany(
//     [
//       { name: 'Apple', score: 8, review: 'Great fruit' },
//       { name: 'Orange', score: 6, review: 'Kinda sour' },
//       { name: 'Banana', score: 9, review: 'Great stuff!' },
//     ],
//     function (err, result) {
//       // validate to ensure there are no errors when inserted into documents
//       assert.equal(err, null);
//       // validate that 3 results are inserted into the collection
//       assert.equal(3, result.insertedCount);
//       assert.equal(3, Object.keys(result.insertedIds).length);
//       console.log('Inserted 3 documents into the collection');
//       callback(result);
//     }
//   );
// };

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function (err, fruits) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(fruits);
    callback(fruits);
  });
};
