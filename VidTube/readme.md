# 🎥 VidTube API

> A Node.js-powered RESTful API for **VidTube**, a YouTube-inspired platform where users can upload videos, interact via comments and mini-tweets, and engage with content through likes.

---

## 📌 Overview

**VidTube** is a full-featured video-sharing platform that allows users to:

- Register & Login (JWT-based authentication)
- Upload and manage videos
- Comment on videos
- Post mini-tweets (similar to social media posts)
- Comment on tweets
- Like videos

This repository contains the backend API responsible for handling all user interactions, data persistence, and business logic.

---

## 🛠️ Tech Stack

- **Node.js** with **Express**
- **MongoDB** / **Mongoose** for database
- **JWT** for secure authentication
- **Dotenv** for environment variables
- **Bcrypt.js** for password encryption
- **Cors** for cross-origin resource sharing

---

## 📁 Project Structure

vidtube-api/
│
├── controllers/        # Route handlers (e.g., videoController.js)/
├── models/             # MongoDB schema models (User, Video, Comment, Tweet)/
├── routes/             # API route definitions (e.g., videoRoutes.js)/
├── middleware/         # Custom middleware (auth, error handling)/
├── config/             # Configuration files (e.g., database connection)/
├── utils/              # Utility functions (e.g., generateToken.js)
├── .env                # Environment variables for development/production
├── server.js           # Entry point of the application/
└── README.md           # Project documentation