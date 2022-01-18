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
  public todos: Todo[] = [];
  public showFooter: boolean = true;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getAllTodos();
  }

  onCreateNewTodo() {
    this.todoService.addTodo(this.newTodo);
    this.todos = this.todoService.getAllTodos();
    this.newTodo = new Todo();
  }
}
