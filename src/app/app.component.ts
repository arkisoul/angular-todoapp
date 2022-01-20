import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { TodoService } from './todo/todo.service';

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Todoapp';
  public username: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public password: FormControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]);
  public userForm!: FormGroup;
  public user: {
    username: string;
    password: string;
  } = {
    username: '',
    password: '',
  };

  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.username.valueChanges.subscribe((value: string) => {
      console.log(value, this.username.valid, this.username.errors);
    })
    this.password.valueChanges.subscribe((value: string) => {
      console.log(value, this.password.valid, this.password.errors);
    })
    this.userForm = this.fb.group({
      un: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    })
  }

  onSubmit() {
    if (this.user.username.trim().length === 0) {
      return;
    }
    if (this.user.password.trim().length === 0) {
      return;
    }
    console.log('form submitted', this.user);
  }

  onReactiveSubmit() {
    console.log('form submitted', this.username.value, this.password.value);
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
