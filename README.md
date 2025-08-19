1. SaveCart – Full-Stack E-commerce Web Application

Technologies: React, Node.js, Express, MongoDB, JWT, Netlify, Render, REST APIs

Description

SaveCart is a full-stack e-commerce web application that allows users to signup, login, browse products, and manage their shopping cart. The backend is built with Node.js and Express and connected to MongoDB Atlas. The frontend is developed using React and deployed on Netlify.

Features

User signup and login with JWT authentication

Browse and search products

Add/remove items to/from cart

Full CRUD operations on products and cart

Deployed frontend on Netlify and backend on Render

Installation & Setup

Clone the repository:

git clone <your-repo-url>


Navigate to the backend directory and install dependencies:

cd backend
npm install


Create a .env file in the backend with the following variables:

MONGODB_URL=your_mongo_url
JWT_SECRET=your_secret_key
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password


Start the backend server:

npm run dev


Navigate to the frontend directory and install dependencies:

cd frontend
npm install
npm start


Open your browser at http://localhost:3000 to access the app.
