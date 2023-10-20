import connect from '@/utils/db';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

// Connect to database
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log(email, password);

    // Check if user do exist
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: 'User does not exist' },
        { status: 400 }
      );
    }

    // Check if user email matches the password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
    }

    // Create token data
    const tokenData = {
      id: user._id,
      email: user.email,
      password: user.password,
    };

    // Create token
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: '1d',
    });

    // Inject token in to the user browser
    const response = NextResponse.json({
      message: 'Login successful',
      success: true,
    });
    response.cookies.set('token', token, { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
