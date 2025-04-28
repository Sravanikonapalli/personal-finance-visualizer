import React, { useState, useEffect } from 'react';
import { getCategories, createCategory } from '../api';

function Category() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    async function loadCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    loadCategories();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await createCategory({ name });
    const updated = await getCategories();
    setCategories(updated);
    setName('');
  }

  return (
    <div>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">Save Category</button>
      </form>

      <h2>Categories</h2>
      <ul className="list-group">
        {categories.map(c => (
          <li key={c._id} className="list-group-item">{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
