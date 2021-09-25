import connectDB from '../../lib/mongodb';
import { Todo } from '../../models/todo';

async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const todos = await Todo.find({});
      return res.status(200).send(todos);
    case 'POST':
      const { title, completed } = req.body;
      const todo = await Todo.create({ title, completed });
      return res.status(201).send(todo);
  }
}

export default connectDB(handler);
