const BASE_URL = 'http://localhost:5000'; 

// Transactions
export async function getTransactions() {
  const res = await fetch(`${BASE_URL}/api/transactions`);
  const data = await res.json();
  return data;
}

export async function createTransaction(transaction) {
  const res = await fetch(`${BASE_URL}/api/transactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  });
  return res.json();
}

export async function deleteTransaction(id) {
  await fetch(`${BASE_URL}/api/transactions/${id}`, { method: 'DELETE' });
}

// Categories
export async function getCategories() {
  const res = await fetch(`${BASE_URL}/api/categories`);
  const data = await res.json();
  return data;
}

export async function createCategory(category) {
  const res = await fetch(`${BASE_URL}/api/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(category),
  });
  return res.json();
}

// Budgets
export async function getBudgets() {
  const res = await fetch(`${BASE_URL}/api/budgets`);
  const data = await res.json();
  return data;
}

export async function createBudget(budget) {
  const res = await fetch(`${BASE_URL}/api/budgets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(budget),
  });
  return res.json();
}
