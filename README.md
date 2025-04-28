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

## API Endpoints

### Transactions

- **Create a new transaction**
  - `POST /api/transactions`
  - Body: `{"amount": number, "description": string, "date": string, "category": string}`

- **Get all transactions**
  - `GET /api/transactions`

- **Update a transaction**
  - `PUT /api/transactions/:id`
  - Body: `{"amount": number, "description": string, "date": string, "category": string}`

- **Delete a transaction**
  - `DELETE /api/transactions/:id`

### Categories

- **Create a new category**
  - `POST /api/categories`
  - Body: `{"name": string}`

- **Get all categories**
  - `GET /api/categories`

- **Update a category**
  - `PUT /api/categories/:id`
  - Body: `{"name": string}`

- **Delete a category**
  - `DELETE /api/categories/:id`

### Budgets

- **Create a new budget**
  - `POST /api/budgets`
  - Body: `{"amount": number, "month": string, "year": number}`

- **Get all budgets**
  - `GET /api/budgets`

- **Update a budget**
  - `PUT /api/budgets/:id`
  - Body: `{"amount": number, "month": string, "year": number}`

- **Delete a budget**
  - `DELETE /api/budgets/:id`

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
