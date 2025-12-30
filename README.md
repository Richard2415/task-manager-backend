# 🛡️ Task Manager API (Node.js + Express + MongoDB + JWT)

This is the backend of the **Task Manager Application**, built using Node.js, Express.js and MongoDB.  
It supports **User Authentication, JWT Security, Role Based Access (Admin/User), and Task CRUD operations**.

---

## 🚀 Features

✔ User Registration & Login  
✔ Password Hashing (bcrypt)  
✔ JWT Authentication  
✔ Protected Routes  
✔ Role-Based Authorization (Admin / User)  
✔ CRUD Operations for Tasks  
✔ MongoDB + Mongoose  
✔ Clean Architecture (Controllers, Routes, Middleware)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt

---

## 📦 Installation

### 1️⃣ Clone the Repository

2️⃣ Install Dependencies
npm install

⚙️ Environment Variables

Create a .env file in the backend root and add:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/minifullstackDB
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1h

▶️ Run the Server
npm start

Backend will run on:
http://localhost:5000
```sh
git clone <backend-repo-url>
cd backend
