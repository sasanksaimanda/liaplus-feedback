import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackDashboard = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Filter states
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('timestamp');
  const [sortOrder, setSortOrder] = useState('desc');
  
  // Fetch feedback data
  const fetchFeedback = async () => {
    try {
      setLoading(true);
      
      // Construct URL with query parameters
      let url = 'http://localhost:5000/api/feedback?';
      
      if (category) url += `category=${category}&`;
      if (search) url += `search=${search}&`;
      if (sortBy) url += `sortBy=${sortBy}&sortOrder=${sortOrder}`;
      
      const response = await axios.get(url);
      setFeedback(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load feedback data. Please try again later.');
      console.error('Error fetching feedback:', err);
    } finally {
      setLoading(false);
    }
  };
  
  // Initial data fetch and when filters change
  useEffect(() => {
    fetchFeedback();
  }, [category, sortBy, sortOrder]);
  
  // Handle search with button to prevent too many requests
  const handleSearch = (e) => {
    e.preventDefault();
    fetchFeedback();
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div className="dashboard">
      <h2>Feedback Dashboard</h2>
      
      {/* Filters */}
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="suggestion">Suggestion</option>
            <option value="bug report">Bug Report</option>
            <option value="feature request">Feature Request</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="sort">Sort By:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="timestamp">Date</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="order">Order:</label>
          <select
            id="order"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
        
        <form onSubmit={handleSearch} className="filter-group">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      
      {/* Error Message */}
      {error && <div className="alert error">{error}</div>}
      
      {/* Loading State */}
      {loading ? (
        <p>Loading feedback data...</p>
      ) : (
        /* Feedback List */
        <div className="feedback-list">
          {feedback.length === 0 ? (
            <p>No feedback found. Try changing your filters.</p>
          ) : (
            feedback.map((item) => (
              <div key={item._id} className="feedback-card">
                <div className="feedback-header">
                  <h3>{item.name}</h3>
                  <span className="feedback-category">{item.category}</span>
                </div>
                <div className="feedback-content">
                  <p>{item.feedbackText}</p>
                </div>
                <div className="feedback-meta">
                  <span>{item.email}</span>
                  <span>{formatDate(item.timestamp)}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default FeedbackDashboard;