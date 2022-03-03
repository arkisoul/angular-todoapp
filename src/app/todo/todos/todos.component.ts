import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { ComponentCanDeactivate } from 'src/app/guards/pending-changes.guard';

import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todoapp-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements ComponentCanDeactivate, OnInit {
  public title: string = 'Todos';
  public newTodo: Todo = new Todo();
  public todoError: boolean = false;
  public todos$: Observable<Todo[]>;
  public completed$: Observable<number>;
  public inCompleted$: Observable<number>;
  public showFooter: boolean = true;

  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    this.todoService.getAllTodos();
    // this.route.data.subscribe((data) => {
    //   this.todos$ = of<Todo[]>(data?.todos?.data);
    // });
  }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
    this.completed$ = this.todoService.getCompleted();
    this.inCompleted$ = this.todoService.getIncompleted();
  }

  canDeactivate(): boolean | Observable<boolean> {
    return false;
  }

  onCreateNewTodo() {
    if (this.newTodo.title.trim().length === 0) {
      this.todoError = true;
      return;
    }
    this.todoError = false;
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  onDeleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }

  onUpdateTodo(todo: Todo) {
    this.todoService.editTodo(todo);
  }

  onTodoStatusChange(event: { status: boolean; todoId: string }) {
    this.todoService.updateTodoStatus(event.status, event.todoId);
  }
}
