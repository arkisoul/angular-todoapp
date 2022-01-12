import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo';

@Component({
  selector: 'todoapp-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  public title: string = 'Todos';
  public newTodo: Todo = new Todo();
  public todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {}

  onCreateNewTodo(value: string) {
    console.log('on create new todo in parent', this.newTodo, value);
  }
}
