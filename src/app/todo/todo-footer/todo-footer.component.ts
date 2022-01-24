import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todoapp-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent {
  @Input() todosLeft!: number | null;
  @Input() todosComplete!: number | null;

  @Output() createNewTodo: EventEmitter<null> = new EventEmitter();

  constructor() {}

  handleClick() {
    this.createNewTodo.emit();
  }
}
