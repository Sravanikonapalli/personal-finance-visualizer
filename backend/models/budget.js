import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
  category: String,
  amount: Number,
  month: String,
});

export default mongoose.model('Budget', budgetSchema);
