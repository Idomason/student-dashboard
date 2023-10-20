import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';

export async function sendEmail({ email, emailType, userId }) {
  try {
    // create a hashed token
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === 'RESET') {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        // TODO add these credentials to .env file
        user: 'e2b46c47f482b0',
        pass: '9b67436a644261',
      },
    });

    const mailOptions = {
      from: 'idomangbede@gmail.com',
      to: email,
      subject:
        emailType === 'VERIFY' ? 'Verify Your Email' : 'Reset Your Password',
      html: `<p>
            Click <a href='${
              process.env.DOMAIN
            }/verifyemail?token=${hashedToken}'>here</a> to ${
        emailType === 'VERIFY' ? 'verify your email' : 'reset your password'
      }
      or copy and paste the link below in your browser. <br> ${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}
        </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);

    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
}
