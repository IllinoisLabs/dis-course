const express = require('express');
const router = express.Router();
const Course = require('../models/major');

// get all majors
router.get('/', async (req, res) => {
  try {
    const majors = await Major.find();
    res.json(majors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get major object by ID
async function getMajor(req, res, next) {
  try {
    major = await Major.findById(req.params.id);
    if (major == null) {
      return res.status(404).json({ message: 'Cant find major' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.major = major;
  next();
  
}

module.exports = router;