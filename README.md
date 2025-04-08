# 📝 TaskManagement App

A full-stack Task Management application where users can:

- ✅ Signup and login securely  
- 🗂️ Create and manage tasks  
- ⭐ Mark tasks as **Important**  
- 📌 Filter tasks by **Important**, **Unimportant**, **Completed**, and **Incomplete**

---

## 🚀 Tech Stack

### Frontend:
- **React** (with Vite setup)
- **Redux Toolkit** (for state management)
- **TailwindCSS** (for styling)

### Backend:
- **Node.js** with **Express.js**
- **MongoDB** (with Mongoose)
- **RESTful API**

---


---

## ⚙️ Features

- 🔐 **Authentication**
  - User signup & login using JWT
- 📋 **Task Management**
  - Add, update, delete tasks
  - Mark tasks as completed/incomplete
  - Mark tasks as important/unimportant
- 🔍 **Filtering**
  - View tasks by: All, Important, Unimportant, Completed, Incomplete

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js >= 16.x
- MongoDB (local or cloud e.g., MongoDB Atlas)

### 1. Clone the Repository

git clone https://github.com/reddy0304/taskmanagement.git
cd taskmanagement


### 2. Setup Backend (Express API)

cd server
npm install

## Create a .env file in the server/ directory with the following:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret


## Start the server:

npm start


### 3. Setup Frontend (React)

cd client
npm install
npm run dev


## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

### 📄 License
This project is licensed under the MIT License.

### 📬 Contact
Feel free to reach out via hemanthreddy030401@gmail.com or create an issue on the repo



