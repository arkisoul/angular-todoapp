import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'todoapp-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  @ViewChild(FormGroupDirective) private formGroupDirective: FormGroupDirective;

  readonly signUpRoute: string = `/auth/signup`;

  public signinForm: FormGroup;
  public hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.createSigninForm();
  }

  ngOnInit(): void {}

  private createSigninForm(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signInUser(): void {
    if (this.signinForm.invalid) return;
    this.authService.login(this.signinForm.value).subscribe((response) => {
      this.formGroupDirective.resetForm();
      if (response.success) {
        sessionStorage.setItem('user', JSON.stringify(response.data));
        this.snackBar.open(response.message);
        setTimeout(() => {
          this.snackBar.dismiss();
          this.router.navigateByUrl('/todos');
          // this.router.navigate(['/todos']);
        }, 3000);
      }
    });
  }

  togglePasswordFieldType(): void {
    this.hide = !this.hide;
  }
}
