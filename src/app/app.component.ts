import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject, of, fromEvent, interval, range } from 'rxjs';
import { map, takeUntil, takeLast } from 'rxjs/operators';

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
  public bsubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

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
    const ob = from([1,2,3,4]);
    const obj = of(1,2,3,4,5);
    ob.subscribe(value => console.log('from ', value));
    obj.subscribe(value => console.log('of ', value))
    // console.log('con', this.observable);
    this.subject.subscribe((value) => console.log('s1 value', value));
    this.subject.subscribe((value) => console.log('s2 value', value));
    this.bsubject.subscribe((value) => console.log('bsubA: ', value));
    this.bsubject.subscribe((value) => console.log('bsubB: ', value));
    // const clickEvent = fromEvent<MouseEvent>(document, 'click');
    // const positions = clickEvent.pipe(map((ev) => ev.clientX));
    // positions.subscribe((value) => console.log('click event', value));
    // const source = interval(1000);
    // const clicks = fromEvent(document, 'click');
    // const result = source.pipe(takeUntil(clicks));
    // result.subscribe((x) => console.log(x));
    const many = range(1, 100);
    const lastThree = many.pipe(takeLast(3));
    lastThree.subscribe((x) => console.log(x));

  }

  ngAfterViewInit(): void {
    // this.userName.nativeElement.focus();
    // this.card.sayHello();
  }

  getName(name: string) {
    // console.log(name);
  }
  
  runBSub() {
    this.bsubject.next(1);
    this.bsubject.next(2);
    this.bsubject.subscribe((value) => console.log('bsubC: ', value));
  }

  getTodos() {
    const todos = this.todoService.getAllTodos();
    this.todoCount = todos.length;
    console.log('just before subscribe');
    // this.observable.subscribe({
    //   next(x) {
    //     console.log('got value ' + x);
    //   },
    //   error(err) {
    //     console.error('something wrong occurred: ' + err);
    //   },
    //   complete() {
    //     console.log('done');
    //   },
    // });
    this.subject.next(1);
    this.subject.next(2);
    this.subject.subscribe((value) => console.log('sub 3 value', value));
    this.subject.next(3);
    this.subject.complete();
    this.subject.next(4);
    console.log('just after subscribe');
  }
}
