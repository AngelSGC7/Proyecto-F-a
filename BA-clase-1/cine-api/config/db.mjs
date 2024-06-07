import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Database connection successful');
  } catch (error) {
    console.error('❌ Database connection error:', error);
    process.exit(1);
  }
};

export { connectDB };