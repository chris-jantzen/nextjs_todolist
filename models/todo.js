import mongoose, { Schema, model } from 'mongoose';

const todo = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    collection: 'todo',
    timestamps: true,
  }
);

// export default model('Todo', todo);
export const Todo = mongoose.models.Todo || mongoose.model('Todo', todo);
