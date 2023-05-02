const connection = require('../config/connection');
const { Thought, User } = require('../models');
const [ userArray, thoughtArray ] = require('./data');
const { ObjectId } = require('mongoose').Types;

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Add thoughts to the collection and await the results
  const thoughts = await Thought.collection.insertMany(thoughtArray);

  for (let i = 0; i < userArray.length; i++) {
    // console.log(thoughtArray[i]._id);
    userArray[i].thoughts.push(thoughtArray[i]._id)
  };
  
  // Add users to the collection and await the results
  await User.collection.insertMany(userArray);

  // Log out the seed data to indicate what should appear in the database
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
