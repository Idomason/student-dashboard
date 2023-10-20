import connect from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';

// Connect to DB
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

    // Find user based on the token
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid user token' },
        { status: 400 }
      );
    }
    console.log(user);

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();

    return NextResponse.json({
      message: 'Email verified successfully',
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
