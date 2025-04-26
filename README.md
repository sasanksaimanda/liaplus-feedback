# liaplus-feedback
user feedback system

# 🚀 User Feedback System

![Banner Image]![image](https://github.com/user-attachments/assets/d584bcad-6396-4484-a5f1-832c1b717899)


> An intuitive, responsive full-stack application for collecting, viewing, and analyzing user feedback in real-time.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v18-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v5+-green)](https://www.mongodb.com/)

## ✨ Live Demo

Check out the live demo: [User Feedback System Demo](https://your-demo-link-here.com)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Environment Variables](#environment-variables)
- [Usage Guide](#-usage-guide)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Development Roadmap](#-development-roadmap)
- [Contributing](#-contributing)
- [Common Issues & Solutions](#-common-issues--solutions)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Features

This User Feedback System comes packed with features to streamline feedback collection and analysis:

### Core Features

- **User-friendly Feedback Collection** - Intuitive form with validation for collecting feedback
- **Feedback Categorization** - Organize feedback into suggestions, bug reports, feature requests
- **Interactive Dashboard** - View, filter, sort, and search through all feedback
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

### Technical Features

- **RESTful API** - Well-structured API for CRUD operations on feedback data
- **Form Validation** - Client and server-side validation for data integrity
- **Real-time Filtering** - Dynamic filtering without page reloads
- **Data Persistence** - MongoDB storage for reliable data management
- **Secure Communication** - CORS configuration for API security

---

## 🛠 Tech Stack

### Frontend
- **React.js** - For building interactive UI components
- **React Router** - For navigation between pages
- **Axios** - For HTTP requests to the backend
- **CSS3** - For styling and responsive design

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework for Node.js
- **MongoDB** - NoSQL database for storing feedback data
- **Mongoose** - MongoDB object modeling for Node.js

### Development Tools
- **Nodemon** - For automatic server restarts during development
- **dotenv** - For environment variable management
- **cors** - For handling Cross-Origin Resource Sharing

---

## 📂 Project Structure

```
user-feedback-system/
├── backend/                  # Backend Node.js application
│   ├── models/               # Database models
│   │   └── Feedback.js       # Feedback data model
│   ├── routes/               # API routes
│   │   └── feedback.js       # Feedback API endpoints
│   ├── .env                  # Environment variables (create this)
│   ├── package.json          # Backend dependencies
│   └── server.js             # Main server file
├── frontend/                 # Frontend React application
│   ├── public/               # Public assets
│   ├── src/                  # Source files
│   │   ├── components/       # React components
│   │   │   ├── FeedbackForm.js    # Form for submitting feedback
│   │   │   └── FeedbackDashboard.js # Dashboard component
│   │   ├── App.css           # Main stylesheet
│   │   ├── App.js            # Root component
│   │   └── index.js          # Entry point
│   └── package.json          # Frontend dependencies
└── README.md                 # Project documentation
```

---

## 📥 Installation

### Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **MongoDB** (Local installation or MongoDB Atlas account)
- **Git** (For cloning the repository)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/user-feedback-system.git or download
   cd user-feedback-system
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the backend directory:
   ```
   MONGODB_URI=mongodb://127.0.0.1:27017/feedback-system
   PORT=5000
   ```
   *Note: If using MongoDB Atlas, replace with your connection string*

4. **Start the backend server**
   ```bash
   npm run dev
   ```
   The server will run at `http://localhost:5000`

### Frontend Setup

1. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

2. **Start the React development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

---

## 📖 Usage Guide

### Submitting Feedback

1. Navigate to the homepage at `http://localhost:3000`
2. Fill out the feedback form with your:
   - Name
   - Email address
   - Feedback category (suggestion, bug report, feature request, other)
   - Detailed feedback text
3. Click the "Submit Feedback" button
4. You'll see a confirmation message when your feedback is successfully submitted

### Using the Dashboard

1. Click on "Dashboard" in the navigation menu
2. View all submitted feedback in a list format
3. Use the filter options to:
   - Filter by category (suggestions, bug reports, etc.)
   - Sort by date, name, or category
   - Change sort order (ascending/descending)
4. Use the search box to find specific feedback by name or content
5. Each feedback card displays:
   - User's name
   - Feedback category
   - Feedback text
   - User's email
   - Submission timestamp

---

## 📚 API Documentation

### Endpoints

#### `POST /api/feedback`
(https://github.com/user-attachments/assets/5ff4639b-47be-4350-9f87-fca016d96c47)

- **Purpose**: Submit new feedback
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "feedbackText": "I love this application!",
    "category": "suggestion"
  }
  ```
- **Success Response**: `201 Created`
  ```json
  {
    "_id": "60f7a9b9e8c7a83b94d57b1c",
    "name": "John Doe",
    "email": "john@example.com",
    "feedbackText": "I love this application!",
    "category": "suggestion",
    "timestamp": "2025-04-27T15:32:12.345Z"
  }
  ```
- **Error Response**: `400 Bad Request`
  ```json
  {
    "message": "Name, email, and feedback text are required"
  }
  ```

#### `GET /api/feedback`

(https://github.com/user-attachments/assets/da99a318-c83a-4a60-8e17-e3e77dfca4ea)


- **Purpose**: Retrieve feedback with optional filtering
- **Query Parameters**:
  - `category`: Filter by category (`suggestion`, `bug report`, `feature request`, `other`)
  - `search`: Search text in name or feedback content
  - `sortBy`: Field to sort by (`timestamp`, `name`, `category`)
  - `sortOrder`: Sort direction (`asc` or `desc`)
- **Success Response**: `200 OK`
  ```json
  [
    {
      "_id": "60f7a9b9e8c7a83b94d57b1c",
      "name": "John Doe",
      "email": "john@example.com",
      "feedbackText": "I love this application!",
      "category": "suggestion",
      "timestamp": "2025-04-27T15:32:12.345Z"
    },
    // More feedback items...
  ]
  ```

---

## 📸 Screenshots

### Feedback Submission Form
![Feedback Form]![image](https://github.com/user-attachments/assets/0bfc7c90-fb0a-491b-ba02-cd15bdd7b010)


### Feedback Dashboard![image](https://github.com/user-attachments/assets/6086ad63-036a-4c20-b1a0-5d5d6aa1d782)


### Mobile View
![Mobile View]![image](https://github.com/user-attachments/assets/63487b40-7cd8-40b0-b4e4-b0d199550767)


---

## 🗺 Development Roadmap

### Phase 1: MVP ✅
- Basic feedback submission form
- Simple dashboard for viewing feedback
- MongoDB integration for data persistence

### Phase 2: Enhanced Features 🔄
- User authentication for admin access
- Email notifications for new feedback
- Feedback analytics and reporting
- Comment/response functionality for feedback items

### Phase 3: Advanced Features 🔜
- User accounts for feedback submitters
- Feedback status tracking (opened, in progress, resolved)
- File attachment support for feedback
- Integration with third-party services (Slack, Jira, etc.)

---

## ❓ Common Issues & Solutions

### Backend won't connect to MongoDB
- **Issue**: "Failed to connect to MongoDB" error message
- **Solution**: 
  - Ensure MongoDB is running (`mongod` command)
  - Try using IP address instead of localhost (`127.0.0.1` instead of `localhost`)
  - Check MongoDB connection string in `.env` file
  - Verify network connectivity and firewall settings

### Frontend can't connect to backend
- **Issue**: API calls fail from React app
- **Solution**:
  - Verify backend server is running
  - Check for CORS issues (backend should have CORS enabled)
  - Confirm API endpoint URLs are correct

### "Module not found" errors
- **Issue**: Node.js can't find installed modules
- **Solution**:
  - Run `npm install` in the relevant directory
  - Delete `node_modules` folder and run `npm install` again
  - Check for typos in import statements

---

## 📞 Contact

- **Project Maintainer**: Sasank manda
- **Email**: sasankmanda8@gmail.com
- **GitHub**: [Your GitHub Profile](https://github.com/sasanksaimanda)
- **LinkedIn**: [Your LinkedIn Profile]([https://linkedin.com/in/yourusername](https://www.linkedin.com/in/sasank-sai-manda-4a3383227/))

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/sasanksaimanda">sasank</a>
</p>
