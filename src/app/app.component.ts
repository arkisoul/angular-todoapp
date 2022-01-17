import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from './shared/card/card.component';
import { TodoService } from './todo/todo.service';

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('username', { read: ElementRef })
  userName!: ElementRef<HTMLInputElement>;

  @ViewChild('card') card!: CardComponent;

  public title = 'Todoapp';
  public today = new Date();
  public price = 999;
  public todoCount: number = 0;

  constructor(private todoService: TodoService) {}

  ngAfterViewInit(): void {
    console.log(this.userName, this.card);
    this.userName.nativeElement.focus();
    this.card.sayHello();
  }

  getName(name: string) {
    console.log(name);
  }

  getTodos() {
    const todos = this.todoService.getAllTodos();
    this.todoCount = todos.length;
  }
}
