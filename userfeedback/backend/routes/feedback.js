const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST - Create new feedback
router.post('/', async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET - Retrieve all feedback
router.get('/', async (req, res) => {
  try {
    let query = {};
    
    // Filter by category if provided
    if (req.query.category) {
      query.category = req.query.category;
    }
    
    // Simple text search if provided
    if (req.query.search) {
      query.$or = [
        { name: { $regex: req.query.search, $options: 'i' } },
        { feedbackText: { $regex: req.query.search, $options: 'i' } }
      ];
    }
    
    // Sort options
    const sortOptions = {};
    if (req.query.sortBy) {
      sortOptions[req.query.sortBy] = req.query.sortOrder === 'desc' ? -1 : 1;
    } else {
      sortOptions.timestamp = -1; // Default: newest first
    }
    
    const feedback = await Feedback.find(query).sort(sortOptions);
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;