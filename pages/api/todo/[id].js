import { Todo } from '../../../models/todo';

export default async function handler(req, res) {
  const { id } = req.query;
  switch (req.method) {
    case 'DELETE':
      await Todo.findByIdAndDelete(id);
      return res.status(204).send('Success');
    case 'PUT':
      const { completed } = req.body;
      let updates = { completed };
      const updatedTodo = await Todo.findByIdAndUpdate(id, updates, { new: true });
      return res.status(200).send(updatedTodo);
    default:
      return res.status(404).send(`Cannot ${req.method} this route`);
  }
}
