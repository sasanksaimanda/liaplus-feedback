import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackText: '',
    category: 'other'
  });
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Clear previous messages
      setMessage('');
      setError('');
      
      // Form validation
      if (!formData.name || !formData.email || !formData.feedbackText) {
        setError('All fields are required');
        return;
      }
      
      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        setError('Please enter a valid email address');
        return;
      }
      
      // Submit to API
      const response = await axios.post('http://localhost:5000/api/feedback', formData);
      
      // Success message
      setMessage('Thank you for your feedback!');
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        feedbackText: '',
        category: 'other'
      });
      
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };
  
  return (
    <div className="feedback-form">
      <h2>Submit Your Feedback</h2>
      <p>We value your input to improve our services!</p>
      
      {message && <div className="alert success">{message}</div>}
      {error && <div className="alert error">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="suggestion">Suggestion</option>
            <option value="bug report">Bug Report</option>
            <option value="feature request">Feature Request</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="feedbackText">Your Feedback</label>
          <textarea
            id="feedbackText"
            name="feedbackText"
            value={formData.feedbackText}
            onChange={handleChange}
            placeholder="Please share your thoughts, suggestions, or report issues..."
          ></textarea>
        </div>
        
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;