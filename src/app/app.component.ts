import { Component } from '@angular/core';

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Angular Todoapp';
  public todoTitle: string = '';
  public todos: string[] = ['Learn Nodejs', 'Learn Angular', 'Learn Mongodb', 'Learn Expressjs'];
  // todos: {id: number, todo: string, isCompleted: boolean}[] = [

  // ]

  public handleSubmit() {
    console.log(this.todoTitle);
    this.todos.push(this.todoTitle);
    this.todoTitle = '';
  }
}
