import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServerResponse } from 'src/app/shared/classes/server-response.class';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoListResolver implements Resolve<ServerResponse<Todo[]>> {
  constructor(private todoService: TodoService) {}
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ServerResponse<Todo[]>> {
    return this.todoService.resolveAllTodos();
  }
}
