import { Component } from '@angular/core';

import { TodoService } from './todo/todo.service';

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Todoapp';

  constructor(private todoService: TodoService) {}
}
