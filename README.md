# 🌲 The Wild Oasis – Hotel Booking Website

A modern hotel booking web application built with ReactJS and TypeScript, allowing users to browse cabins, manage bookings, and update guest information through a responsive and user-friendly interface.

---

## ✨ Features

### Cabin Browsing & Filtering

- Browse cabin listings with images, descriptions, and pricing
- Filter cabins by guest capacity
- View cabin amenities and detailed information

### Booking System

- Select booking dates using `react-day-picker`
- Calculate pricing dynamically based on booking duration
- Prevent booking unavailable dates through API integration

### Guest Dashboard

- Guest authentication with Google OAuth (in progress)
- View booking history and reservation details
- Update guest profile information
- Manage and cancel upcoming reservations

---

## 🛠️ Tech Stack

### Frontend

- React 19
- TypeScript
- React Router v7
- Tailwind CSS v4
- Axios
- React Day Picker

### Tools

- Vite
- Git & GitHub

---

## 📂 Project Structure

```txt
src/
├── assets/
├── components/
│   ├── booking/
│   ├── cabins/
│   ├── guest/
│   └── common/
├── pages/
│   ├── home/
│   ├── about/
│   ├── cabins/
│   └── guest/
├── routes/
├── services/
├── types/
├── App.tsx
└── main.tsx
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/mtan7805/the-wild-oasis.git
```

### Move to Project Folder

```bash
cd the-wild-oasis
```

### Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` or `.env.local` file in the root directory:

```env
GOOGLE_CLIENT_ID="your_google_oauth_client_id"

VITE_GOOGLE_CLIENT_ID="your_google_oauth_client_id"

GOOGLE_CLIENT_SECRET="your_google_oauth_client_secret"
```

---

## ▶️ Run Development Server

```bash
npm run dev
```

Open your browser:

```txt
http://localhost:5173
```

---

## 🔗 API Integration

The frontend application fetches data from a REST API for:

- Cabin listings
- Cabin details
- Booking management
- Guest reservations

Base API Endpoint:

```txt
https://the-wild-oasis-api.vercel.app/api
```

---

## 🗺️ Future Improvements

- Complete Google OAuth integration
- Add dark mode support
- Improve booking management flow
- Add animations and transitions
- Add payment integration

---

## 👤 Author

GitHub: https://github.com/mtan7805
Project: https://github.com/mtan7805/the-wild-oasis
