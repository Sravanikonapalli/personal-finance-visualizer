import React, { useState, useEffect } from 'react';
import { getTransactions } from '../api';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getTransactions();
      setTransactions(data);
    }
    load();
  }, []);

  // Aggregating monthly data
  const monthlyData = transactions.reduce((acc, tx) => {
    const month = new Date(tx.date).toLocaleString('default', { month: 'short' });
    acc[month] = (acc[month] || 0) + tx.amount;
    return acc;
  }, {});

  // Aggregating category data
  const categoryData = transactions.reduce((acc, tx) => {
    acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
    return acc;
  }, {});

  const barData = Object.keys(monthlyData).map(month => ({ month, amount: monthlyData[month] }));
  const pieData = Object.keys(categoryData).map(cat => ({ name: cat, value: categoryData[cat] }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A'];

  return (
    <div>
      <h2>Dashboard</h2>

      <h4>Monthly Expenses</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h4>Category Breakdown</h4>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label>
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;
