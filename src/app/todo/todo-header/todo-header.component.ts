import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'todoapp-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
})
export class TodoHeaderComponent implements OnInit {
  @Input('appTitle') title!: string;
  @Input() newTodo!: Todo;

  @Output() createNewTodo: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onKeyupEnter() {
    console.log('Enter key pressed', this.newTodo);
    this.createNewTodo.emit('hello from child');
  }
}
