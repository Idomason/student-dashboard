import connect from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';

// Connect to DB
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    console.log(email);

    // Find user based on the token
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: 'No user with this email' },
        { status: 400 }
      );
    }
    console.log(user);

    // Hash a new password and update user password with the newly hashed password
    const passwordReset = bcrypt.hash();

    user.isVerified = true;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;

    await user.save();

    return NextResponse.json({
      message: 'Email verified successfully',
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
