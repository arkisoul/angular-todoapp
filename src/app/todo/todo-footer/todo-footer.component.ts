import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'todoapp-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit, OnDestroy {
  @Input() todosLeft!: number;

  @Output() createNewTodo: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
      console.log('Footer on destroy')
  }

  handleClick() {
    this.createNewTodo.emit();
  }
}
