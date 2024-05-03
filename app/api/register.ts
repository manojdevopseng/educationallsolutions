import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import connectDB from '@/utils/db';
import UserModel from '@/models/userModel';

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new UserModel({ email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'User registration failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
