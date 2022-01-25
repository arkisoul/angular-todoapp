import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TodosComponent },
      { path: ':id', component: TodoDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
