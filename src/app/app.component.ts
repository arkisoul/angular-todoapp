import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
  public observable: Observable<number>;
  public subject: Subject<number> = new Subject<number>();

  constructor(private todoService: TodoService) {
    this.observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    console.log('con', this.observable);
    this.subject.subscribe(value => console.log('s1 value', value));
    this.subject.subscribe(value => console.log('s2 value', value));
  }

  ngAfterViewInit(): void {
    // this.userName.nativeElement.focus();
    // this.card.sayHello();
  }

  getName(name: string) {
    // console.log(name);
  }

  getTodos() {
    const todos = this.todoService.getAllTodos();
    this.todoCount = todos.length;
    console.log('just before subscribe');
    this.observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    this.subject.next(1);
    this.subject.next(2);
    this.subject.complete();
    this.subject.next(3);
    console.log('just after subscribe');
  }
}
