const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }],
      friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
      }]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual property `friendCount` that gets and sets the number of friends in the friends array
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.count();
  });

const User = model('user', userSchema);

module.exports = User;