import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'todoapp-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos!: Todo[];

  @Output() deleteTodo: EventEmitter<number> = new EventEmitter();

  constructor() {}

  handleDeleteTodo(event: number) {
    this.deleteTodo.emit(event);
  }
}
