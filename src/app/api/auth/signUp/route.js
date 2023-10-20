import connect from '@/utils/db';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/helper/mailer';

// Connect to the database
connect();

// Post request controller
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {
      passport,
      firstName,
      lastName,
      email,
      password,
      bio,
      dateOfBirth,
      studentId,
      careerPath,
      skillsAcquired,
      state,
      city,
      portfolioUrl,
      facebookUrl,
      instagramUrl,
      linkedInUrl,
      workAvailabilty,
      workType,
    } = reqBody;

    // console.log(reqBody);
    // Check if user already exist
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ error: 'User already exist' });
    }

    // Hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // console.log(hashedPassword);

    // Save user to the database
    const newUser = new User({ ...reqBody, password: hashedPassword });
    // console.log(newUser);

    const savedUser = await newUser.save();

    console.log(savedUser);

    // Send verification email
    await sendEmail({ email, emailType: 'VERIFY', userId: savedUser._id });

    return NextResponse.json({
      message: 'User created successfully',
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
