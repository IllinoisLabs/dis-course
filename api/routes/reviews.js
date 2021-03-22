const express = require('express');
const router = express.Router();
const Review = require('../models/review');
const { hashId } = require('../utils/helper');

// Getting all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// create a review
router.post('/', async (req, res) => {
  const review = new Review({
    id: hashId(req.body.title + req.body.author + req.body.desc + req.body.created),
    title: req.body.title,
    rating: req.body.rating,
    desc: req.body.desc,
    lastEdited: (new Date()).now(),
    created: (new Date()).now(), 
    author: req.body.author,
  });

  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Getting one review by id
router.get('/:id', getReview, (req, res) => {
  res.json(res.review);
});

// update review
router.patch('/:id', getReview, async (req, res) => {
  if (req.body.title != null) {
    res.review.title = req.body.title;
  }

  if (req.body.rating != null) {
    res.review.rating = req.body.rating;
  }

  if (req.body.desc != null) {
    res.review.desc = req.body.desc;
  }

  if (req.body.lastEdited != null) {
    res.review.lastEdited = (new Date()).now();
  }

  if (req.body.author != null) {
    res.review.author = req.body.author;
  }

  try {
    const updatedReview = await res.review.save();
    res.json(updatedReview);
  } catch {
    res.status(400).json({ message: err.message });
  }
});

// get review object by ID
async function getReview(req, res, next) {
  try {
    review = await Review.findById(req.params.id);
    if (review == null) {
      return res.status(404).json({ message: 'Cant find review' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.review = review;
  next();
}

module.exports = router;
