import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { Todo } from '../models/todo';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [TodoListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event handleDeleteTodo', () => {
    const mockFun = spyOn(component.deleteTodo, 'emit');
    component.handleDeleteTodo('todoId');
    expect(mockFun.calls.count()).toEqual(1);
    expect(mockFun).toHaveBeenCalledTimes(1);
  });

  it('should emit an event handleUpdateTodo', () => {
    const mockFun = spyOn(component.updateTodo, 'emit');
    component.handleUpdateTodo(
      new Todo({ _id: 'todoId', title: 'Todo title', isCompleted: false })
    );
    expect(mockFun.calls.count()).toEqual(1);
    expect(mockFun).toHaveBeenCalledTimes(1);
  });

  it('should emit an event handleTodoStatusChanged', () => {
    const mockFun = spyOn(component.updateTodoStatus, 'emit');
    component.handleTodoStatusChanged({ status: true, todoId: 'todoId' });
    expect(mockFun.calls.count()).toEqual(1);
    expect(mockFun).toHaveBeenCalledTimes(1);
  });
});
