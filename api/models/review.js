const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    range: [0, 5],
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  lastEdited: {
    type: Date,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Review', reviewSchema);
