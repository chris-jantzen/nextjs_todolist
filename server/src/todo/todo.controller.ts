import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { throwError } from '../utils/errorHandling';
import {
  CreateTodoInput,
  CreateTodoOutput,
  GetTodoByIdInput,
  ListTodosOutput,
  GetTodoByIdOutput,
  UpdateTodoInput,
  UpdateTodoOutput,
} from './todo.dto';
import { TodoDocument } from './todo.schema';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post('create')
  @HttpCode(201)
  @HttpCode(400)
  async create(
    @Body() createTodoInput: CreateTodoInput,
  ): Promise<CreateTodoOutput> {
    try {
      const { body, completed } = createTodoInput;
      const todo: TodoDocument = await this.todoService.create(body, completed);
      return { todo, success: true };
    } catch (error) {
      throwError(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('list')
  @HttpCode(200)
  async listTodos(): Promise<ListTodosOutput> {
    try {
      const todos: Array<TodoDocument> = await this.todoService.list();
      return { todos, success: true };
    } catch (error) {
      throwError(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('get/:id')
  @HttpCode(200)
  @HttpCode(400)
  @HttpCode(404)
  async getTodoById(
    @Param() params: GetTodoByIdInput,
  ): Promise<GetTodoByIdOutput> {
    let todo: TodoDocument | null;
    const { id } = params;
    try {
      todo = await this.todoService.getTodoById(id);
    } catch (error) {
      throwError(error.message, HttpStatus.BAD_REQUEST);
    }
    if (!todo) {
      throwError('Todo Not Found', HttpStatus.NOT_FOUND);
    }
    return { todo, success: true };
  }

  @Put('update/:id')
  @HttpCode(200)
  @HttpCode(400)
  @HttpCode(404)
  async update(
    @Param() params: { id: string },
    @Body() input: UpdateTodoInput,
  ): Promise<UpdateTodoOutput> {
    const { id } = params;
    const { todo: todoUpdates } = input;
    if (!id || !todoUpdates) {
      throwError('Bad Request', HttpStatus.BAD_REQUEST);
    }
    let todo: TodoDocument | null;
    try {
      todo = await this.todoService.updateTodo(id, todoUpdates);
    } catch (error) {
      throwError('Bad Request', HttpStatus.BAD_REQUEST);
    }
    if (!todo) {
      throwError('Todo Not Found', HttpStatus.NOT_FOUND);
    }
    return { todo, success: true };
  }

  @Delete('delete/:id')
  @HttpCode(204)
  @HttpCode(404)
  async delete(@Param() params: { id: string }): Promise<void> {
    const { id } = params;
    try {
      await this.todoService.deleteTodo(id);
    } catch (error) {
      throwError(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
