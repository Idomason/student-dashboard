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
      host: process.env.MAILER_HOST,
      port: process.env.MAILER_PORT,
      auth: {
        // TODO add these credentials to .env file
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAILER_FROM,
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
