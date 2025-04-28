import express from 'express';
import Budget from '../models/budget.js';

const router = express.Router();

// Create a new budget
router.post('/', async (req, res) => {
  try {
    const newBudget = new Budget(req.body);
    await newBudget.save();
    res.status(201).json(newBudget);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all budgets
router.get('/', async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a budget
router.put('/:id', async (req, res) => {
  try {
    const updatedBudget = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBudget);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a budget
router.delete('/:id', async (req, res) => {
  try {
    await Budget.findByIdAndDelete(req.params.id);
    res.json({ message: 'Budget deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
