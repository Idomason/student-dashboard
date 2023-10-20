import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    passport: {
      type: String,
      default: 'https://i.pravatar.cc/48?u=118836',
    },
    firstName: {
      type: String,
      required: [true, 'A student must have a first name'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'A student must have a last name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'A student must have an email'],
      unique: [true, 'Email exist'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'A student must have a password'],
      unique: false,
    },
    bio: {
      type: String,
      unique: true,
      trim: true,
    },

    dateOfBirth: {
      type: Object,
      unique: true,
      trim: true,
    },
    studentId: {
      type: String,
      required: [true, 'A student must have a student ID Code'],
      unique: true,
      trim: true,
    },
    careerPath: {
      type: Array,
      unique: true,
      trim: true,
    },
    skillsAcquired: {
      type: String,
      unique: true,
      trim: true,
    },
    state: {
      type: String,
      required: [true, 'A student must have a current state of residence'],
      unique: true,
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'A student must have a current city of residence'],
      unique: true,
      trim: true,
    },
    portfolioUrl: {
      type: String,
      unique: true,
      trim: true,
    },
    facebookUrl: {
      type: String,
      unique: true,
      trim: true,
    },
    instagramUrl: {
      type: String,
      unique: true,
      trim: true,
    },
    linkedInUrl: {
      type: String,
      unique: true,
      trim: true,
    },
    workAvailabilty: {
      type: String,
      unique: true,
      trim: true,
    },
    workType: {
      type: String,
      unique: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  {
    timestamps: true,
  }
);

// export default mongoose.models?.User || mongoose.model('User', userSchema);

const User = mongoose.models.users || mongoose.model('users', userSchema);
export default User;
