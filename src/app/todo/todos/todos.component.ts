import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todoapp-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  public title: string = 'Todos';
  public newTodo: Todo = new Todo();
  public todoError: boolean = false;
  public todos$: Observable<Todo[]>;
  public completed$: Observable<number>;
  public inCompleted$: Observable<number>;
  public showFooter: boolean = true;

  constructor(private todoService: TodoService) {
    this.todoService.getAllTodos();
    this.todos$ = this.todoService.getTodos();
    this.completed$ = this.todoService.getCompleted();
    this.inCompleted$ = this.todoService.getIncompleted();
  }

  onCreateNewTodo() {
    if (this.newTodo.title.trim().length === 0) {
      this.todoError = true;
      return;
    }
    this.todoError = false;
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  onDeleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }

  onUpdateTodo(todo: Todo) {
    this.todoService.editTodo(todo);
  }

  onTodoStatusChange(event: { status: boolean; todoId: string }) {
    this.todoService.updateTodoStatus(event.status, event.todoId);
  }
}
