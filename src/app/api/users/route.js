import connect from '@/utils/db';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

// Handle GET Request
export const GET = async (request) => {
  // fetch
  try {
    await connect();
    const users = await User.find();

    return NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
