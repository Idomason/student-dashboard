import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

export async function sendForgotPasswordEmail({ email, emailType, userId }) {
  try {
    // create hashed token
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === 'RESET') {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });

      const transport = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
          // TODO add these credentials to .env file
          user: '3fd364695517df',
          pass: '7383d58fd399cf',
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
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
