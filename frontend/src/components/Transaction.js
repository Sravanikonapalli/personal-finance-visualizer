import React, { useState, useEffect } from 'react';
import { getTransactions, createTransaction, deleteTransaction } from '../api';

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amountError, setAmountError] = useState('');

  const categories = [
    "Food", "Rent", "Utilities", "Transportation", "Entertainment", 
    "Health", "Education", "Savings", "Miscellaneous"
  ];

  useEffect(() => {
    async function loadTransactions() {
      const data = await getTransactions();
      setTransactions(data);
    }
    loadTransactions();
  }, []);

  // Handle amount input validation
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);

    if (value < 0) {
      setAmountError('Amount must be a positive number');
    } else {
      setAmountError('');
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // If there's an error in amount, do not proceed with the transaction creation
    if (amountError) {
      return;
    }

    await createTransaction({ amount, description, date, category });
    const updated = await getTransactions();
    setTransactions(updated);

    // Clear fields after submission
    setAmount('');
    setDescription('');
    setDate('');
    setCategory('');
  }

  async function handleDelete(id) {
    await deleteTransaction(id);
    const updated = await getTransactions();
    setTransactions(updated);
  }

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
          required
        />
        {amountError && <p className="text-danger">{amountError}</p>} {/* Error message for invalid amount */}

        <input
          className="form-control mb-2"
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />

        <input
          className="form-control mb-2"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />

        <select
          className="form-control mb-2"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>

        <button className="btn btn-primary" type="submit" disabled={amountError}>Add Transaction</button>
      </form>

      <h2>Transactions</h2>
      <ul className="list-group">
        {transactions.map(tx => (
          <li key={tx._id} className="list-group-item d-flex justify-content-between align-items-center">
            {tx.date.substring(0, 10)} - {tx.description} - ${tx.amount} [{tx.category}]
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(tx._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transaction;
