import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormGroupDirective,
} from '@angular/forms';

import { User } from '../models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'todoapp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  @ViewChild(FormGroupDirective) private formGroupDirective: FormGroupDirective;

  readonly signInRoute: string = `/auth/signin`;

  public signupForm: FormGroup;
  public hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.createSignupForm();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  private createSignupForm(): void {
    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signUpUser(): void {
    if (this.signupForm.invalid) return;
    const formValues: User = { ...this.signupForm.value };
    this.authService.signUp(formValues).subscribe();
    this.formGroupDirective.resetForm();
  }

  togglePasswordFieldType(event: Event): void {
    this.hide = !this.hide;
  }
}
