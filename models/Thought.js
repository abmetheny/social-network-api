const { Schema, Types, model } = require('mongoose');
const dayjs = require('dayjs');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    _id: false,
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate,
      
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
});

function formatDate(date) {
  return dayjs(date).format('MM/DD/YYYY');
};

const Thought = model('thought', thoughtSchema);

module.exports = Thought;