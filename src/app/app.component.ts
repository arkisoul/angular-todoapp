import { Component } from '@angular/core';

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular todoapp';

  handleChange(value: string) {
    console.log(value);
  }

  handleSubmit(value: string) {
    console.log(value);
  }
}
