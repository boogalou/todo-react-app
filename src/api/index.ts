import { baseUrl } from './config';
import { TodosType } from '../bus/todos/types';

export class ApiService {

 static async getTodos(): Promise<TodosType[]> {
    const response = await fetch (`${baseUrl}todos/`)
    return await response.json();
  };

 static async upTodo(todo: TodosType): Promise<void> {
   await fetch(`${baseUrl}todos/`, {
     method: 'PUT',
     body: JSON.stringify(todo),
   });
 }
}