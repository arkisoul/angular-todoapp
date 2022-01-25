import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todoapp-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) {
    this.route.params.subscribe((params) => {
      const todoId = params.id;
      if (todoId) {
        this.todoService.getTodoById(todoId).subscribe((response) => {
          if (response.success) {
            if (response.data) {
              this.todo = response.data;
            }
          }
        });
      }
    });
    this.route.queryParams.subscribe((params) => {
      console.log('query params', params);
    });
  }

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/todos']);
  }
}
