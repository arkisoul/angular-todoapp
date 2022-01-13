import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('username') userName!: TemplateRef<HTMLInputElement>;
  public title = 'Todoapp';

  ngAfterViewInit(): void {
    console.log(this.userName);
    this.userName.elementRef.nativeElement.focus();
  }

  getName(name: string) {
    console.log(name);
  }
}
