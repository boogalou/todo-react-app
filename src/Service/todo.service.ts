import { apiService } from '../api';
import { TodoItem } from '../types/todo.interface';
import { AxiosResponse } from 'axios';


class TodoService {

  public async create(todoData: TodoItem): Promise<AxiosResponse<TodoItem>> {

    return await apiService.post(`/todos/newTodo`, todoData)
  }
}

export const todoService = new TodoService();

