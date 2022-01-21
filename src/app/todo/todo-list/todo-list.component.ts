import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'todoapp-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos!: Todo[];

  @Output() deleteTodo: EventEmitter<string> = new EventEmitter();

  constructor() {}

  handleDeleteTodo(event: string) {
    this.deleteTodo.emit(event);
  }
}
