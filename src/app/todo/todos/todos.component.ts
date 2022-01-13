import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Todo } from '../models/todo';

@Component({
  selector: 'todoapp-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy, AfterViewInit {
  public title: string = 'Todos';
  public newTodo: Todo = new Todo();
  public todos: Todo[] = [];
  public showFooter: boolean = true;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('oninit');
  }

  ngOnDestroy(): void {
    console.log('ondestroy');
  }

  ngAfterViewInit(): void {
    console.log('afterviewinit');
  }

  onCreateNewTodo() {
    this.todos.push(this.newTodo);
    this.newTodo = new Todo();
  }
}
