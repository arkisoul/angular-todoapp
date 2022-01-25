import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingChangesGuard } from '../guards/pending-changes.guard';
import { TodoListResolver } from './resolvers/todo-list.resolver';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TodosComponent,
        canDeactivate: [PendingChangesGuard],
        data: {
          title: 'Todos list',
          appName: 'Todos'
        },
        resolve: {
          todos: TodoListResolver
        }
      },
      { path: ':id', component: TodoDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
