import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Transaction from './components/Transaction';
import Dashboard from './components/Dashboard';
import Budget from './components/Budget';
import Category from './components/Category';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Finance Tracker</a>
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/dashboard">Dashboard</a>
            <a className="nav-item nav-link" href="/transaction">Transactions</a>
            <a className="nav-item nav-link" href="/budget">Budget</a>
            <a className="nav-item nav-link" href="/category">Categories</a>
          </div>
        </nav>

        <Routes> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/category" element={<Category />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
