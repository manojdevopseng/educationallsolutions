import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
            const user = await UserModel.findOne({ email }); // Correct usage of findOne
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });

            res.status(200).json({ token });
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ error: 'Login failed' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
