import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todoapp-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  @Input() todosLeft!: number;

  @Output() createNewTodo: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.createNewTodo.emit();
  }
}
