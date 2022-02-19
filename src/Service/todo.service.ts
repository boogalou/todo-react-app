import { apiService } from '../api';
import { TodoItem } from '../types/todo.interface';
import { AxiosResponse } from 'axios';


class TodoService {

  public async create(todoData: TodoItem, userId: string): Promise<AxiosResponse<TodoItem>> {

    return apiService.post(`todos/create/${userId}`, todoData)
  }
}

export const todoService = new TodoService();

