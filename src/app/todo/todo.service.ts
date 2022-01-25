import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Todo } from './models/todo';
import { ServerResponse } from '../shared/classes/server-response.class';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private completed$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private incomplete$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private readonly API_URL: string = `${environment.apiUrl}/todos`;

  constructor(private http: HttpClient) {}

  addTodo(todo: Todo) {
    this.http.post<ServerResponse<Todo>>(`${this.API_URL}`, todo).subscribe((response) => {
      if(response.data) {
        const todo = response.data;
        const todos = this.todos$.getValue();
        const updatedTodos = todos.concat(todo);
        this.todos$.next(updatedTodos);
        this.updateSummary();
      }
    });
  }

  editTodo(updateTodo: Todo) {
    return this.http
      .put<ServerResponse<Todo>>(
        `${this.API_URL}/${updateTodo._id}`,
        updateTodo
      )
      .subscribe((response) => {
        if (response.success) {
          const todos = this.todos$.getValue();
          const updatedTodos = todos.map((todo) => {
            if (todo._id === updateTodo._id) {
              if (response.data) todo = response.data;
            }
            return todo;
          });
          this.todos$.next(updatedTodos);
          this.updateSummary();
        }
      });
  }

  updateTodoStatus(status: boolean, todoId: string) {
    return this.http.patch<ServerResponse<Todo>>(`${this.API_URL}/${todoId}`, {
      status,
    }).subscribe((response) => {
      if(response.success) {
        const todos = this.todos$.getValue();
        const updatedTodos = todos.map((todo) => {
          if(todo._id === todoId) {
            if (response.data) todo = response.data;
          }
          return todo;
        })
        this.todos$.next(updatedTodos);
        this.updateSummary();
      }
    });
  }

  deleteTodo(todoId: string) {
    return this.http.delete<ServerResponse<null>>(`${this.API_URL}/${todoId}`).subscribe((response) => {
      if(response.success) {
        const todos = this.todos$.getValue();
        const updatedTodos = todos.filter(todo => todo._id !== todoId)
        this.todos$.next(updatedTodos);
        this.updateSummary();
      }
    });
  }

  getAllTodos() {
    return this.http.get<ServerResponse<Todo[]>>(`${this.API_URL}`);
  }

  getTodoById(todoId: string): Observable<ServerResponse<Todo>> {
    return this.http.get<ServerResponse<Todo>>(`${this.API_URL}/${todoId}`);
  }

  updateSummary() {
    const todos = this.todos$.getValue();
    const completed = todos.filter((todo: Todo) => todo.isCompleted);
    this.completed$.next(completed.length);
    this.incomplete$.next(todos.length - completed.length);
  }

  getTodos() {
    return this.todos$.asObservable();
  }

  getCompleted() {
    return this.completed$.asObservable()
  }

  getIncompleted() {
    return this.incomplete$.asObservable();
  }
}
