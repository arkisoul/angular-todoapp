import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Todo } from '../models/todo';

@Component({
  selector: 'todoapp-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  @Output() deleteTodo: EventEmitter<number> = new EventEmitter();

  @ViewChild('deletePrompt') private deletePrompt!: TemplateRef<MatDialog>;

  public isDisabled: boolean = true;
  private dialogRef!: MatDialogRef<MatDialog>;

  constructor(private matDialog: MatDialog) {}

  delete() {
    this.closeDialog();
    this.deleteTodo.emit(this.todo._id);
  }

  onDeletePrompt() {
    this.dialogRef = this.matDialog.open(this.deletePrompt);
  }

  onNoClick() {
    this.closeDialog();
  }

  private closeDialog() {
    if (this.dialogRef) this.dialogRef.close();
  }
}
