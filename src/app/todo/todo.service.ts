import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from './models/todo';
import { ServerResponse } from './classes/server-response.class';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private completed: number = 0;
  private incomplete: number = 0;
  private readonly API_URL: string = `${environment.apiUrl}/todos`;

  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<ServerResponse<Todo>> {
    // this.todos.push(todo);
    // this.updateSummary();
    return this.http.post<ServerResponse<Todo>>(`${this.API_URL}`, todo);
  }

  editTodo(updateTodo: Todo) {
    return this.http.put<ServerResponse<Todo>>(
      `${this.API_URL}/${updateTodo._id}`,
      updateTodo
    );
  }

  deleteTodo(todoId: string) {
    return this.http.delete<ServerResponse<null>>(`${this.API_URL}/${todoId}`);
  }

  getAllTodos(): Observable<ServerResponse<Todo[]>> {
    return this.http.get<ServerResponse<Todo[]>>(`${this.API_URL}`);
  }

  getTodoById(todoId: string): Observable<ServerResponse<Todo>> {
    return this.http.get<ServerResponse<Todo>>(`${this.API_URL}/${todoId}`);
  }

  updateSummary() {
    const completed = this.todos.filter((todo: Todo) => todo.isCompleted);
    this.completed = completed.length;
    this.incomplete = this.todos.length - this.completed;
  }

  getSummary() {
    return {
      completed: this.completed,
      incomplete: this.incomplete,
      total: this.completed + this.incomplete,
    };
  }
}
