# incubyte-sweets-inventory

📁 Project Structure

Incubyte_Project/ 
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components (Home, Add, Edit, View)
│   │   └── main.jsx        # React entry point
│   └── index.html
├── server/                 # Backend (Node + Express)
│   ├── models/
│   ├── routes/
│   ├── tests/              # Mocha TDD tests
│   └── app.js
└── README.md

🚀 Features

✅ View list of all sweets with images

✅ Search by name, category, or price range

✅ Add new sweets with image and quantity

✅ Edit or delete sweets

✅ Purchase sweets (stock decreases)

✅ Restock sweets (stock increases)

✅ Responsive and user-friendly UI

✅ Backend TDD tested with Jest

🧱 Tech Stack

| Frontend     | Backend           | Database | Testing            |
| ------------ | ----------------- | -------- | ------------------ |
| React (Vite) | Node.js + Express | MongoDB  | Jest (TDD)         |


⚙️ Setup Instructions
💻 Frontend Setup

cd frontend
npm install
npm run dev

Frontend will run at: http://localhost:5173

🛠️ Backend Setup

cd backend
npm install
npm start

Backend will run at: http://localhost:3000

Create a config.env file inside the backend/ folder:
MONGO_URI=your_mongodb_connection_string


🤖 AI Tools Used
This project was enhanced with the help of:

ChatGPT

✅ Test Results

| 📄 Test File            | 🧪 Test Description                                   | ✅ Passed Tests |
| ----------------------- | ----------------------------------------------------- | -------------- |
| `searchSweet.test.js`   | Search sweets by name, category, price range, filters | 5/5            |
| `sortSweet.test.js`     | Sort sweets by name, price, category                  | 6/6            |
| `addSweet.test.js`      | Validate & add sweets (with invalid/valid data)       | 7/7            |
| `restockSweet.test.js`  | Restock inventory for a sweet                         | 5/5            |
| `purchaseSweet.test.js` | Simulate sweet purchase and validations               | 6/6            |
| `updateSweet.test.js`   | Update sweet details with different edge cases        | 5/5            |
| `viewAllSweets.test.js` | Retrieve all sweets from the database                 | 2/2            |
| `getSweet.test.js`      | Fetch single sweet by ID with validations             | 3/3            |
| `deleteSweet.test.js`   | Delete sweet and handle invalid IDs                   | 3/3            |
| `healthCheck.test.js`   | Check API health route and error fallback             | 4/4            |
| `appError.test.js`      | Custom AppError handling class                        | 2/2            |

ScreenShots

<img width="1920" height="1080" alt="Screenshot 2025-07-17 213446" src="https://github.com/user-attachments/assets/3289f3b1-8519-4314-b055-66fe8ed265b7" />


<img width="1920" height="1080" alt="Screenshot 2025-07-17 213704" src="https://github.com/user-attachments/assets/6a4c9cac-22ff-43e6-aeed-2bb0ce883787" />


<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b2a71ec2-d732-47c1-8721-4fe322b96f80" />


<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0a418137-19d3-443c-a17b-049543890172" />




