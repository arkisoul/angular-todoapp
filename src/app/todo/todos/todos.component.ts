import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todoapp-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy, AfterViewInit {
  public title: string = 'Todos';
  public newTodo: Todo = new Todo();
  public todos: Todo[];
  public showFooter: boolean = true;

  constructor(private todoService: TodoService) {
    console.log('constructor');
    this.todos = this.todoService.getAllTodos();
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
    this.todoService.addTodo(this.newTodo);
    this.todos = this.todoService.getAllTodos();
    this.newTodo = new Todo();
  }
}
