import express from 'express';
import { connectDB } from './config/db.mjs';

const app = express();

connectDB();

app.use(express.json());

import userRoutes from './routes/userRoutes.mjs';
import authRoutes from './routes/authRoutes.mjs';

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});