import connect from '@/utils/db';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { id } = params;
  // fetch
  try {
    await connect();
    const user = await User.findById(id);

    console.log(user);

    return NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
