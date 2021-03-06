import { apiService } from '../api';
import { TodoItem } from '../types/todo.interface';
import { AxiosResponse } from 'axios';
import { CompletedRequest } from '../types/completedRequest.interface';
import { TodoCreate } from '../types/todo.create.interface';


class TodoService {

  public async create(todoData: TodoCreate): Promise<AxiosResponse<TodoItem>> {
    return await apiService.post(`/todos/newTodo`, todoData);
  }

  public async getAll(userId: string): Promise<AxiosResponse<TodoItem[]>> {
    console.log('getAll>>', userId);
    return await apiService.get(`/todos/${ userId }`);
  }

  public async completed(payload: CompletedRequest): Promise<AxiosResponse<TodoItem>> {
    return await apiService.patch(`/todos/update`, {payload});
  }

  public async deleteTodo(payload: { data: { _id: string } }): Promise<void> {
    console.log(payload.data._id );
    await apiService.delete(`/todos/delete/${ payload.data._id }`);
  }
}

export const todoService = new TodoService();

