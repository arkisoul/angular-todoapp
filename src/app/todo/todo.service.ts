import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from './models/todo';
import { ServerResponse } from './classes/server-response.class';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private completed: number = 0;
  private incomplete: number = 0;

  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<ServerResponse<Todo>> {
    // this.todos.push(todo);
    return this.http.post<ServerResponse<Todo>>("http://localhost:3000/todos", todo);
    // this.updateSummary();
  }

  editTodo(updateTodo: Todo) {
    this.todos.forEach((todo) => {
      if (todo._id === updateTodo._id) {
        todo = updateTodo;
      }
    });
    this.updateSummary();
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((todo) => todo._id !== todoId);
    this.updateSummary();
  }

  getAllTodos(): Observable<ServerResponse<Todo[]>> {
    return this.http.get<ServerResponse<Todo[]>>('http://localhost:3000/todos');
  }

  getTodoById(todoId: number): Todo | Boolean {
    const todo = this.todos.filter((todo) => todo._id === todoId);
    return todo.length ? todo[0] : false;
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
