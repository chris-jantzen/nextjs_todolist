import { TodoDocument } from './todo.schema';

type Output = {
  success: boolean;
};

export type CreateTodoInput = {
  body: string;
  completed: boolean;
};

export type CreateTodoOutput = {
  todo: TodoDocument;
} & Output;

export type ListTodosOutput = {
  todos: Array<TodoDocument>;
} & Output;

export type GetTodoByIdInput = {
  id: string;
};

export type GetTodoByIdOutput = {
  todo: TodoDocument;
} & Output;

export type UpdateTodoInput = {
  todo: Partial<TodoDocument>;
};

export type UpdateTodoOutput = {
  todo: TodoDocument;
} & Output;
