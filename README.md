# 🎉 EventSphere Management System

A MERN Stack based Expo & Event Management System.

## 🚀 Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express.js
- Database: MongoDB
- Authentication: JWT
- Styling: Bootstrap / Tailwind CSS
- API Testing: Postman

---

# 📁 Project Structure

```
EventSphere/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   ├── home/
│   │   │   ├── admin/
│   │   │   ├── exhibitor/
│   │   │   └── attendee/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── utils/
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── backend/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── uploads/
    ├── utils/
    └── server.js
```

---

# 👥 User Roles

- Admin
- Exhibitor
- Attendee

---

# 📌 Public Pages

- Home
- About
- Contact
- Login
- Register
- Forgot Password
- Reset Password

---

# 📌 Admin Module

- Dashboard
- Expo Management
- Booth Management
- Exhibitor Management
- Session Management
- Reports
- Analytics
- Settings

---

# 📌 Exhibitor Module

- Dashboard
- Profile
- Apply Expo
- My Applications
- Booth Selection
- My Booth
- Messages

---

# 📌 Attendee Module

- Dashboard
- Events
- Event Details
- Exhibitors
- Sessions
- Bookmarks
- Notifications
- Feedback

---

# 🔗 Routing

## Public

```
/
/about
/contact
/login
/register
/forgot-password
/reset-password
```

## Admin

```
/admin/dashboard
/admin/expos
/admin/booths
/admin/exhibitors
/admin/sessions
/admin/reports
/admin/analytics
/admin/settings
```

## Exhibitor

```
/exhibitor/dashboard
/exhibitor/profile
/exhibitor/apply
/exhibitor/applications
/exhibitor/booth-selection
/exhibitor/my-booth
/exhibitor/messages
```

## Attendee

```
/attendee/dashboard
/attendee/events
/attendee/events/:id
/attendee/exhibitors
/attendee/sessions
/attendee/bookmarks
/attendee/notifications
/attendee/feedback
```

---

# 👨‍💻 Team Responsibilities

## Developer 1

- Authentication
- Login
- Register
- Forgot Password
- JWT

## Developer 2

- Admin Dashboard
- Expo Management
- Booth Management
- Reports
- Analytics

## Developer 3

- Exhibitor Module
- Booth Selection
- Profile
- Messages

## Developer 4

- Attendee Module
- Events
- Sessions
- Bookmarks
- Feedback

---

# ⚙️ Installation

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Backend

```bash
cd backend
npm install
npm run dev
```

---

# 📋 Coding Rules

- One component per file
- Use functional components
- Use default export
- Keep folder structure unchanged
- Do not modify route files without discussion
- Keep reusable components inside `components`

---

# 📦 Git Workflow

```bash
git pull origin main
git checkout -b feature/module-name
git add .
git commit -m "Added module"
git push origin feature/module-name
```

Create a Pull Request before merging into `main`.

---

# 📝 Status

- ✅ Project Setup
- ✅ Folder Structure
- ✅ Routing
- ✅ Layouts
- ✅ Pages Created

Next Phase:
- Authentication
- Backend APIs
- Database Integration
- UI Development