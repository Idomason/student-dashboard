import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    postImage: {
      type: String,
      default: 'https://i.pravatar.cc/48?u=118836',
    },
    postTitle: {
      type: String,
      required: [true, 'A post must have a title'],
      trim: true,
    },
    postDesc: {
      type: String,
      required: [true, 'A post must have a description'],
      trim: true,
    },
    postContent: {
      type: String,
      required: [true, 'A post must have content'],
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.Post || mongoose.model('Post', postSchema);
