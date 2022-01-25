import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';
import { Todo } from '../models/todo';

@Component({
  selector: 'todoapp-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos!: Todo[] | null;

  @Output() deleteTodo: EventEmitter<string> = new EventEmitter();
  @Output() updateTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() updateTodoStatus: EventEmitter<{
    status: boolean;
    todoId: string;
  }> = new EventEmitter();

  constructor(/* private router: Router */) {}

  handleDeleteTodo(event: string) {
    this.deleteTodo.emit(event);
  }

  handleUpdateTodo(event: Todo) {
    this.updateTodo.emit(event);
  }

  handleTodoStatusChanged(event: { status: boolean; todoId: string }) {
    this.updateTodoStatus.emit(event);
  }

  // navigateToDetails(todoId: string) {
  //   // this.router.navigate(['/todos', todoId]);
  //   this.router.navigateByUrl(`/todos/${todoId}`);
  // }
}
