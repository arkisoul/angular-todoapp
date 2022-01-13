import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'todoapp-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
})
export class TodoHeaderComponent implements OnInit, OnChanges {
  @Input('appTitle') title!: string;
  @Input() newTodo!: Todo;

  @Output('createTodo') createNewTodo: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

  onKeyupEnter() {
    this.createNewTodo.emit();
  }
}
