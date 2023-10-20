const { getDataFromToken } = require('@/helper/getDataFromToken');
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import connect from '@/utils/db';

// Connect to DB
connect();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select('-password');
    // const user = await User.findById(userId);
    // const user = await User.findById(userId, (err, user) =>{});

    return NextResponse.json({ message: 'User found', data: user });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
