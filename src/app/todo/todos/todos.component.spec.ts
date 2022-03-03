import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { LogoutComponent } from 'src/app/auth/logout/logout.component';
import { Todo } from '../models/todo';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { TodoHeaderComponent } from '../todo-header/todo-header.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoService } from '../todo.service';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  const leftMouseButton = 0;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'auth/logout', component: LogoutComponent },
        ]),
        HttpClientTestingModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatChipsModule,
        MatListModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        TodosComponent,
        TodoHeaderComponent,
        TodoFooterComponent,
        TodoListComponent,
      ],
      providers: [TodoService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should title equals to "Todos"', () => {
    expect(component.title).toEqual('Todos');
  });

  it('should redirect to logout component when click on Logout button', fakeAsync (() => {
    let debugElement: DebugElement = fixture.debugElement;
    let logoutBtn: DebugElement = debugElement.query(By.css('a[href="/auth/logout"'))
    let location: Location = TestBed.inject(Location);
    logoutBtn.triggerEventHandler('click', { button: leftMouseButton });
    tick(1000);
    expect(location.path()).toEqual('/auth/logout');
  }));

  it('[todoapp-header] component should receive appTitle', () => {
    let debugElement: DebugElement = fixture.debugElement;
    let todoHeaderComp: DebugElement = debugElement.query(
      By.css('todoapp-todo-header')
    );
    expect(
      todoHeaderComp.nativeElement.attributes['ng-reflect-title'].value
    ).toEqual('Todos');
  });

  // it('[todoapp-header] component should receive newTodo', () => {
  //   let debugElement: DebugElement = fixture.debugElement;
  //   let todoHeaderComp: DebugElement = debugElement.query(By.css('todoapp-todo-header'));
  //   expect(
  //     todoHeaderComp.nativeElement.attributes['ng-reflect-new-todo']
  //       .value instanceof Todo
  //   ).toBeTrue();
  //   expect(todoHeaderComp.nativeElement.attributes['ng-reflect-new-todo'].value.title).toEqual('');
  //   expect(todoHeaderComp.nativeElement.attributes['ng-reflect-new-todo'].value.isCompleted).toBeFalse();
  // });

  it('[todoapp-header] component should emit createTodo event', () => {
    let debugElement: DebugElement = fixture.debugElement;
    let todoHeaderComp: DebugElement = debugElement.query(
      By.css('todoapp-todo-header')
    );
    const mockFun = spyOn(component, 'onCreateNewTodo');
    todoHeaderComp.triggerEventHandler('createTodo', null);
    expect(mockFun.calls.count()).toEqual(1);
    expect(mockFun).toHaveBeenCalledTimes(1);
  });

  it('[todoapp-list] component should emit deleteTodo event with todoId', () => {
    let debugElement: DebugElement = fixture.debugElement;
    let todoListComp: DebugElement = debugElement.query(
      By.css('todoapp-todo-list')
    );
    const mockFun = spyOn(component, 'onDeleteTodo');
    todoListComp.triggerEventHandler('deleteTodo', 'todoId');
    expect(mockFun.calls.mostRecent().args[0]).toEqual('todoId');
  });
});
