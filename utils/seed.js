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
  const thoughtIds = await Thought.insertMany(thoughtArray);

  // Pushes thought ids to the user array to populate the thoughts subdocument collection
  for (let i = 0; i < userArray.length; i++) {
    userArray[i].thoughts.push(thoughtIds[i]._id)
  };
  
  // Add users to the collection and await the results
  const userIds = await User.insertMany(userArray);

  // Updates user collection to add a friend to each user array
  await User.updateMany({}, { friends: userIds[10]._id });

  // Log out the seed data to indicate what should appear in the database
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
