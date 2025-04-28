import React, { useState, useEffect } from 'react';
import { getBudgets, createBudget } from '../api';

function Budget() {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    async function loadBudgets() {
      const data = await getBudgets();
      setBudgets(data);
    }
    loadBudgets();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await createBudget({ category, amount });
    const updated = await getBudgets();
    setBudgets(updated);
    setCategory('');
    setAmount('');
  }

  return (
    <div>
      <h2>Set Budget</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
        <input
          className="form-control mb-2"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">Save Budget</button>
      </form>

      <h2>Budgets</h2>
      <ul className="list-group">
        {budgets.map(b => (
          <li key={b._id} className="list-group-item">{b.category} - ${b.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Budget;
