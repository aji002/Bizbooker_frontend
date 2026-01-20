# BizBooker – Online Appointment Booking System (Frontend)

BizBooker is a modern online appointment booking web application that allows users to discover businesses, book appointments, manage bookings, and leave reviews.
This repository contains the frontend of the application built with React.js.

---

## 🚀 Features

### 👤 User Features
- User authentication (Sign up / Login)
- Browse businesses by category
- View business details
- Book appointments using a calendar interface
- View upcoming & past appointments
- Rate and review businesses only after appointment completion
- Bookmark favorite businesses
- Fully responsive design

### 🏢 Business/Admin Features
- Business profile management
- View customer bookings
- Manage appointment availability
- Dashboard for booking management

---

## 🛠️ Tech Stack

- Frontend: React.js
- State Management: React Hooks / Context API
- HTTP Client: Axios
- Routing: React Router
- Styling: Tailwind CSS

---

## 📂 Project Structure
src/
│── components/ # Reusable UI components
│── pages/ # Page-level components
│── services/ # API calls using Axios
│── context/ # Global state management
│── routes/ # Application routing
│── assets/ # Images and static files
│── utils/ # Helper functions
│── App.jsx
│── main.jsx


---

## 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based access control (User / Business / Admin)
- Protected routes for authorized users

---

## 📅 Appointment Booking Flow

1. User selects a business
2. Chooses an available date and time slot
3. Confirms the booking
4. Appointment status updates
5. Reviews enabled only after appointment completion

---

## ⭐ Ratings & Reviews

- Only users with completed appointments can submit ratings
- Star ratings and comments are displayed on the business details page
- Reviews are fetched dynamically from the backend

---

## ❤️ Bookmark Feature

- Users can bookmark businesses using a heart icon
- Bookmarked businesses are displayed in a dedicated bookmarks page
- Bookmarks are stored in the user profile

---

## ⚙️ Installation & Setup
git clone https://github.com/your-username/bizbooker-frontend.git
cd bizbooker-frontend
npm install
npm run dev

