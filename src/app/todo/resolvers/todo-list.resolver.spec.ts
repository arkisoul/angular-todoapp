import { TestBed } from '@angular/core/testing';

import { TodoListResolver } from './todo-list.resolver';

describe('TodoListResolver', () => {
  let resolver: TodoListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TodoListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
