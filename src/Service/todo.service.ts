import { apiService } from '../api';
import { TodoItem } from '../types/todo.interface';
import { AxiosResponse } from 'axios';


class TodoService {

  public async create(todoData: TodoItem): Promise<AxiosResponse<TodoItem>> {

    return apiService.post('/create', todoData)
  }
}

export const todoService = new TodoService();

