import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Todo } from '../models/todo';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatIconModule,
      ],
      declarations: [TodoItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.todo = new Todo({
      _id: 'todoId',
      title: 'Todo title',
      isCompleted: false,
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event on delete', () => {
    const mockFun = spyOn(component.deleteTodo, 'emit');
    component.delete();
    expect(mockFun.calls.count()).toEqual(1);
    expect(mockFun).toHaveBeenCalledTimes(1);
  });

  it('should isDiabled = true on edit function', () => {
    component.edit();
    expect(component.isDisabled).toBeFalse();
  });

  it('should isDiabled = false on update function', () => {
    const mockFun = spyOn(component.updateTodo, 'emit');
    component.update();
    expect(component.isDisabled).toBeTrue();
    expect(mockFun).toHaveBeenCalledTimes(1);
  });

  it('should emit an event on updateStatusChange function', () => {
    const mockFun = spyOn(component.updateTodoStatus, 'emit');
    component.todoStatusChanged({ checked: true } as MatCheckboxChange);
    expect(mockFun).toHaveBeenCalledTimes(1);
  });
});
