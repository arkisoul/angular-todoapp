import { Component } from '@angular/core';

type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Todos';
  public todoTitle: string = '';
  public todos: Todo[] = [];
  textColor: string = 'blue';

  public handleSubmit() {
    console.log(this.todoTitle);
    const id = Math.floor(Math.random() * 50);
    this.todos.push({
      id: id,
      title: this.todoTitle,
      isCompleted: id % 2 === 0,
    });
    this.todoTitle = '';
  }
}
