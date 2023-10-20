import mongoose from 'mongoose';

export default async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE);
  } catch (error) {
    throw new Error('Connection failed!');
  }
}
