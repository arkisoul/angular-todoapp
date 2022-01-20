type TODO = {
  _id: number;
  title: string;
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export class Todo {
  _id: number;
  title: string;
  isCompleted: boolean;
  createdAt!: string;
  updatedAt!: string;

  constructor(
    todo: TODO = {
      _id: 0,
      title: '',
      isCompleted: false,
    }
  ) {
    this._id = todo._id;
    this.title = todo.title;
    this.isCompleted = todo.isCompleted;
    this.createdAt = todo.createdAt ? todo.createdAt : new Date().toLocaleString();
    this.updatedAt = todo.updatedAt ? todo.updatedAt : new Date().toLocaleString();
  }
}
