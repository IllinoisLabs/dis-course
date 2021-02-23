const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coi: {
    type: String,
    required: true,
  },
  cn: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Course', courseSchema);
