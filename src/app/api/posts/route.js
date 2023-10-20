import connect from '@/utils/db';
import Post from '@/models/postModel';
import { NextResponse } from 'next/server';

// Handle GET Request
export const GET = async (request) => {
  // fetch
  try {
    await connect();
    const posts = await Post.find();

    return NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

// Create POST
export const POST = async (request) => {
  // const body = await request.json();
  const { postImage, postTitle, postDesc, postContent } = await request.json();

  await connect();

  const newPost = new Post({
    postImage,
    postTitle,
    postDesc,
    postContent,
  });

  try {
    await newPost.save();
    return new NextResponse('Post Created Successfully', { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
