const mongoose = require('mongoose');

const topicSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: 'general',
    },
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;
