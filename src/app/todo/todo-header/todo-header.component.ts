import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'todoapp-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
})
export class TodoHeaderComponent {
  @Input('appTitle') title!: string;
  @Input() newTodo!: Todo;
  @Input() todoError!: boolean;

  @Output('createTodo') createNewTodo: EventEmitter<null> = new EventEmitter();

  constructor() {}

  onKeyupEnter() {
    this.createNewTodo.emit();
  }
}
