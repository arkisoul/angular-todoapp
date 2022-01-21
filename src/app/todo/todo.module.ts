import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TodosComponent } from './todos/todos.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { SharedModule } from '../shared/shared.module';

const materialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatDialogModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [
    TodosComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ...materialModules
  ],
  exports: [TodosComponent],
})
export class TodoModule {}
