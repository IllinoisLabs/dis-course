const mongoose = require('mongoose');

const majorSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  courses: { 
    type: [Course],
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model('Major', majorSchema);