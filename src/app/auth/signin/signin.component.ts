import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'todoapp-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(FormGroupDirective) private formGroupDirective: FormGroupDirective;

  readonly signUpRoute: string = `/auth/signup`;

  public signinForm: FormGroup;
  public hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.createSigninForm();
  }

  ngOnInit(): void { }

  private createSigninForm(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  signInUser(): void {
    if(this.signinForm.invalid) return;
    this.authService.login(this.signinForm.value).subscribe();
    this.formGroupDirective.resetForm();
  }

  togglePasswordFieldType(event: Event): void {
    this.hide = !this.hide;
  }
}
