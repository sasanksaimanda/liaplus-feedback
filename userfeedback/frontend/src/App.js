import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>User Feedback System</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Submit Feedback</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main className="container">
          <Routes>
            <Route path="/" element={<FeedbackForm />} />
            <Route path="/dashboard" element={<FeedbackDashboard />} />
          </Routes>
        </main>
        
        <footer>
          <p>User Feedback System &copy; 2025</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;