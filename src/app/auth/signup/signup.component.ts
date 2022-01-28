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
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.createSignupForm();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  private createSignupForm(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  signUpUser(): void {
    if (this.signupForm.invalid) return;
    
    this.authService.signUp(this.signupForm.value).subscribe((response) => {
      if(response.success) {
        this.snackBar.open(response.message);
        setTimeout(() => {
          this.snackBar.dismiss();
        }, 3000)
      }
    });
    this.formGroupDirective.resetForm();
  }

  togglePasswordFieldType(): void {
    this.hide = !this.hide;
  }
}
