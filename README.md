InkSpace ✍️

A modern, minimal blogging platform for stories, ideas, and perspectives.

InkSpace is a responsive React + Vite blogging website built with a clean editorial-style interface. Users can explore stories by category, read individual articles, create an account, and log in through a simple client-side authentication flow.

✨ Features

🏠 Clean and responsive home page

✍️ Blog / story reading experience

📚 Stories listing page

🗂️ Category-based browsing

Technology

Lifestyle

Ideas

📖 Individual story pages with dynamic slugs

🔐 Register and login functionality

👋 Logged-in user greeting in the navbar

🚪 Logout functionality

💾 LocalStorage-based user/session persistence

📄 About page

📩 Contact page

❌ Custom 404 page

🧭 Client-side routing with React Router

📱 Responsive editorial-style UI

🛠️ Tech Stack

React 19

Vite 8

React Router 7

JavaScript (ES6+)

CSS

LocalStorage for basic client-side authentication

📂 Project Structure

blogWebsite/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Stories.jsx
│   │   ├── Category.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js

🚀 Getting Started

1. Clone the repository

git clone <your-repository-url>
cd blogWebsite

2. Install dependencies

npm install

3. Start the development server

npm run dev

Open the local URL shown by Vite, usually:

http://localhost:5173

📜 Available Scripts

Command

Description

npm run dev

Starts the development server

npm run build

Creates the production build

npm run preview

Previews the production build

npm run lint

Runs ESLint

🧭 Routes

Route

Page

/

Home

/about

About

/contact

Contact

/stories

All Stories

/stories/category/technology

Technology Stories

/stories/category/lifestyle

Lifestyle Stories

/stories/category/ideas

Ideas Stories

/stories/:slug

Individual Story

/login

Login

/register

Register

*

404 Not Found

🔐 Authentication

InkSpace currently uses LocalStorage for its frontend authentication flow.

Registration stores the user's details locally.

Login validates the stored user details.

The active session is stored in inkspaceLoggedIn.

Logout clears the active session.

The navbar automatically updates after login or logout.

Note: This is a frontend-only authentication system for learning and portfolio purposes. A production application should use a secure backend, database, password hashing, and proper session/authentication management.

📝 Blog Content

Stories are currently managed as JavaScript data inside the React application. Each story has a title, category, slug, description/content, and can be opened through its dynamic URL.

Example:

/stories/how-technology-is-changing-the-way-we-live

🎨 Design

InkSpace uses a simple editorial design focused on readability and content:

Warm cream background

Serif-based headings

Minimal navigation

Dark neutral typography

Amber accent color

Spacious layouts

Responsive design

🔮 Future Improvements

Backend and database integration

Admin dashboard for publishing stories

Create, edit, and delete posts

Real authentication and user accounts

Search functionality

Comments and likes

Author profiles

Bookmarks

SEO improvements

Newsletter integration

👨‍💻 Author

Md Aakib

Built as a modern React blogging project and portfolio application.

⭐ If you like the project, consider giving the repository a star!