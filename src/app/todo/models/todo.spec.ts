import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
  
  it('should create an instance with given values', () => {
    const todo = new Todo({
      _id: 'todoid',
      title: 'New todo',
      isCompleted: false,
    });
    expect(todo).toBeTruthy();
    expect(todo.title).toEqual('New todo')
    expect(todo.isCompleted).toBeFalse();
  });
});
