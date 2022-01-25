import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingChangesGuard } from '../guards/pending-changes.guard';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TodosComponent, canDeactivate: [PendingChangesGuard] },
      { path: ':id', component: TodoDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
