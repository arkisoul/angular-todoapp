type TODO = {
  _id: string;
  title: string;
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export class Todo {
  _id: string;
  title: string;
  isCompleted: boolean;
  createdAt!: string;
  updatedAt!: string;

  constructor(todo?: TODO) {
    this._id = todo && todo._id ? todo._id : '';
    this.title = todo && todo.title ? todo.title : '';
    this.isCompleted = todo && todo.isCompleted ? todo.isCompleted : false;
    this.createdAt = todo && todo.createdAt ? todo.createdAt : new Date().toLocaleString();
    this.updatedAt = todo && todo.updatedAt ? todo.updatedAt : new Date().toLocaleString();
  }
}
