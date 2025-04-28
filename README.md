# Transaction Management App

## Description

This is a full-stack web application for managing financial transactions.  
Users can add, view, and delete transactions. Each transaction has an amount, description, date, and a predefined category.  
Form validation ensures the amount is a positive number.

---

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/Sravanikonapalli/personal-finance-visualizer.git
cd personal-finance-visualizer
```

### Install Dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### Configure Environment Variables

Inside the `backend/` folder, create a `.env` file:

```bash
MONGODB_URI=mongodb+srv://konapallisravani:Srav123@cluster22.yymu71c.mongodb.net/FinanceApp?retryWrites=true&w=majority&appName=Cluster22
PORT=5000
```

---

## Run the App Locally

```bash
cd backend
node server.js

cd ../frontend
npm start
```

Frontend will run at: [http://localhost:3001](http://localhost:3001)  
Backend will run at: [http://localhost:5000](http://localhost:5000)

---

## Live Deployment

- [Frontend Live Demo](https://personal-finance-visualizer-black.vercel.app/)
- [Backend Live API](https://personal-finance-visualizer-mdlb.onrender.com)

---

## Features

- Add new transactions (amount, description, date, category)
- Validation: Amount must be a positive number
- View all transactions
- Delete transactions
- Predefined categories:
  - Food
  - Rent
  - Utilities
  - Transportation
  - Entertainment
  - Health
  - Education
  - Savings
  - Miscellaneous
- Clear input fields after submitting
- Responsive UI using Bootstrap

---

## Tech Stack

- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
