import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoDocument, Todo } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(body: string, completed: boolean): Promise<TodoDocument> {
    const newTodo: Todo = {
      body,
      completed,
    };
    const todo = await this.todoModel.create(newTodo);
    return todo;
  }

  async list(): Promise<Array<TodoDocument>> {
    const todos: Array<TodoDocument> = await this.todoModel.find({});
    return todos;
  }

  async getTodoById(id: string): Promise<TodoDocument | null> {
    const todo: TodoDocument | null = await this.todoModel.findById(id);
    return todo;
  }

  async updateTodo(
    id: string,
    todoUpdates: Partial<Todo>,
  ): Promise<TodoDocument | null> {
    const todo: TodoDocument | null = await this.todoModel.findByIdAndUpdate(
      id,
      todoUpdates,
      { new: true },
    );
    return todo;
  }

  async deleteTodo(id: string): Promise<void> {
    const todo: TodoDocument = await this.todoModel.findByIdAndDelete(id);
    if (!todo) {
      throw new Error('Todo Not Found');
    }
  }
}
