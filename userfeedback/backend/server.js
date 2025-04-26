const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const feedbackRoutes = require('./routes/feedback');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB manually with your URI
const mongoURI = 'mongodb+srv://sasanksaimanda:Sasank%40123@cluster0.n3cyl.mongodb.net/feedback-system?retryWrites=true&w=majority';

// Connect to MongoDB without .env
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api/feedback', feedbackRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Feedback API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
