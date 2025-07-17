# 🎉 Incubyte Sweets Inventory

A full-stack inventory management system for sweets 🍬 — built with **React**, **Node.js**, and **MongoDB**, with robust **Jest tests** ensuring backend reliability using **Test-Driven Development (TDD)**.

---

## 🚀 Features

- ✅ View all sweets with images  
- ✅ Search sweets by name, category, or price range  
- ✅ Add new sweets with image and quantity  
- ✅ Edit or delete sweets  
- ✅ Purchase sweets (decrease stock)  
- ✅ Restock sweets (increase stock)  
- ✅ Responsive, minimalist, sweet-themed UI  
- ✅ Fully tested backend (Jest + TDD)

---

## 🧱 Tech Stack

| Frontend         | Backend            | Database | Testing     |
|------------------|--------------------|----------|-------------|
| React (Vite)     | Node.js + Express  | MongoDB  | Jest (TDD)  |

---

## ⚙️ Project Structure

<pre> ``` incubyte-sweets-inventory/ ├── backend/ │ ├── models/ │ ├── routes/ │ ├── tests/ ← All Jest test cases │ ├── utils/ │ ├── app.js │ └── server.js ├── client/ │ ├── src/ │ │ ├── components/ ← Reusable UI (SweetCard, Navbar, etc.) │ │ ├── pages/ ← Add, List, Edit sweets │ │ └── App.jsx │ └── index.html └── README.md ``` </pre>


## 🖥️ Setup Instructions

### 🔹 Frontend (React + Vite)

```bash
cd client
npm install
npm run dev
```
Frontend will run at: http://localhost:5173

🔹 Backend (Node.js + Express)
```bash

cd backend
npm install
npm start
```
Backend will run at: http://localhost:3000

Create a config.env file inside the backend/ folder:
MONGO_URI=your_mongodb_connection_string


🤖 AI Tools Used
This project was enhanced with the help of:

ChatGPT

##✅ Test Results

| 📄 Test File            | 🧪 Test Description                            | ✅ Passed Tests |
| ----------------------- | ---------------------------------------------- | -------------- |
| `db.test.js`            | Database connectivity and setup                | 1/1            |
| `purchase.test.js`      | Purchase sweet and reduce quantity             | 4/4            |
| `searchSweets.test.js`  | Search sweets by name and category             | 3/3            |
| `addSweet.test.js`      | Add new sweet to database                      | 3/3            |
| `sweetsList.test.js`    | Retrieve all sweets                            | 2/2            |
| `restockSweet.test.js`  | Restock quantity and error for invalid sweetId | 3/3            |
| `editSweetForm.test.js` | Update sweet details with and without image    | 3/3            |

---

## 📸 Screenshots

### 🧾 Home - All Sweets Listing
<img width="800" alt="Home Page" src="https://github.com/user-attachments/assets/3289f3b1-8519-4314-b055-66fe8ed265b7" />

### ➕ Add New Sweet Form
<img width="800" alt="Add Sweet Form" src="https://github.com/user-attachments/assets/6a4c9cac-22ff-43e6-aeed-2bb0ce883787" />

### ✏️ Edit Sweet Details
<img width="800" alt="Edit Sweet" src="https://github.com/user-attachments/assets/b2a71ec2-d732-47c1-8721-4fe322b96f80" />

### 📦 Purchase & Restock Actions
<img width="800" alt="Purchase and Restock" src="https://github.com/user-attachments/assets/0a418137-19d3-443c-a17b-049543890172" />


---

### ✅ **API Endpoints (API Reference)**
Give a list of API routes for clarity.

```markdown
## 🔌 API Reference

| Method | Route                | Description              |
|--------|----------------------|--------------------------|
| GET    | `/ `                 | Get all sweets           |
| POST   | `/add`               | Add new sweet            |
| GET    | `/sweets/:id`        | Get a sweet by ID        |
| PUT    | `/sweets/:id`        | Update sweet by ID       |
| DELETE | `/sweets/:id`        | Delete sweet             |
| PATCH  | `/sweets/:id/restock`| Restock a sweet          |
| POST   | `/sweets/:id/purchase`| Purchase a sweet        |

