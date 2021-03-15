const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const { hashId } = require('../utils/helper');

// Getting all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating one course
router.post('/', async (req, res) => {
  const course = new Course({
    id: hashId(req.body.name + req.body.coi + req.body.cn),
    name: req.body.name,
    coi: req.body.coi,
    cn: req.body.cn,
  });

  try {
    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Getting one course
router.get('/:id', getCourse, (req, res) => {
  res.json(res.course);
});

// Updating one course
router.patch('/:id', getCourse, async (req, res) => {
  if (req.body.name != null) {
    res.course.name = req.body.name;
  }

  if (req.body.coi != null) {
    res.course.coi = req.body.coi;
  }

  if (req.body.cn != null) {
    res.course.cn = req.body.cn;
  }

  try {
    const updatedCourse = await res.course.save();
    res.json(updatedCourse);
  } catch {
    res.status(400).json({ message: err.message });
  }
});
// Deleting one course
router.delete('/:id', getCourse, async (req, res) => {
  try {
    await res.course.remove();
    res.json({ message: 'Deleted This Course' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get course object by ID
async function getCourse(req, res, next) {
  try {
    course = await Course.findOne({ id: req.params.id });
    if (course == null) {
      return res.status(404).json({ message: 'Cant find course' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.course = course;
  next();
}

module.exports = router;
