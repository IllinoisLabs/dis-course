const express = require('express');
const router = express.Router();
const Career = require('../models/career');
const { hashId } = require('../utils/helper');

//getting all careers
router.get('/', async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//create one career
router.post('/', async (req, res) => {
  const career = new Career({
    id: hashId(req.body.name + req.body.desc),
    name: req.body.name,
    courses: req.body.courses,
    desc: req.body.desc,
  });

  try {
    const newCareer = await career.save();
    res.status(201).json(newCareer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//find career by id
router.get('/:id', getCareer, (req, res) => {
  res.json(res.career);
});

//update career
router.patch('/:id', getCareer, async (req, res) => {
  if (req.body.name != null) {
    res.career.name = req.body.name;
  }

  if (req.body.courses != null) {
    res.career.courses = req.body.courses;
  }

  if (req.body.desc != null) {
    res.career.desc = req.body.desc;
  }

  try {
    const updatedCareer = await res.career.save();
    res.json(updatedCareer);
  } catch {
    res.status(400).json({ message: err.message });
  }
});

// get career object by ID
async function getCareer(req, res, next) {
  try {
    career = await Career.findOne({ id: req.params.id });
    if (career == null) {
      return res.status(404).json({ message: 'Cant find career' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.career = career;
  next();
}

module.exports = router;