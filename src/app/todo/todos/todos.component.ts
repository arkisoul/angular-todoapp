import { Component } from '@angular/core';

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
  public todos: Todo[] = [];
  public showFooter: boolean = true;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getAllTodos();
  }

  onCreateNewTodo() {
    if (this.newTodo.title.trim().length === 0) {
      this.todoError = true;
      return;
    }
    this.todoError = false;
    this.todoService.addTodo(this.newTodo);
    this.todos = this.todoService.getAllTodos();
    this.newTodo = new Todo();
  }

  onDeleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getAllTodos();
  }
}
