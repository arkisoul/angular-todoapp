import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CardComponent } from './shared/card/card.component';

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

  ngAfterViewInit(): void {
    console.log(this.userName, this.card);
    this.userName.nativeElement.focus();
    this.card.sayHello();
  }

  getName(name: string) {
    console.log(name);
  }
}
