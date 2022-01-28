import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../models';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let debugElement: DebugElement;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatIconModule,
      ],
      declarations: [SignupComponent],
      providers: [AuthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid form when empty', () => {
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('should be invalid name field when empty', () => {
    expect(component.signupForm.controls['name']?.valid).toBeFalsy();
    const errors = component.signupForm.controls['name']?.errors || {};
    expect(errors.required).toBeTrue();
  });
  
  it('should be invalid email field when empty', () => {
    expect(component.signupForm.get('email')?.valid).toBeFalsy();
    const errors = component.signupForm.get('email')?.errors || {};
    expect(errors.required).toBeTrue();
  });

  it('should be invalid password field when empty', () => {
    expect(component.signupForm.get('password')?.valid).toBeFalsy();
    const errors = component.signupForm.get('password')?.errors || {};
    expect(errors.required).toBeTrue();
  });

  it('should login button be disabled when empty', () => {
    const loginBtn = debugElement.query(By.css('button[type="submit"]'));
    expect(loginBtn.nativeElement.textContent).toContain('Register');
    expect(loginBtn.attributes['disabled']).toBeDefined();
  });

  it('email field should be valid with value "janedoe@mailinator.com"', () => {
    component.signupForm.get('email')?.setValue('janedoe@mailinator.com');
    expect(component.signupForm.get('email')?.valid).toBeTruthy();
  });

  it('password field should be valid with value "12345678"', () => {
    component.signupForm.get('password')?.setValue('12345678');
    expect(component.signupForm.get('password')?.valid).toBeTruthy();
  });

  it('form should be valid with value email "janedoe@mailinator.com" and password "12345678"', () => {
    component.signupForm.get('name')?.setValue('Jane Doe');
    component.signupForm.get('email')?.setValue('janedoe@mailinator.com');
    component.signupForm.get('password')?.setValue('12345678');
    expect(component.signupForm.valid).toBeTruthy();
  });

  it('hide property should be true', () => {
    expect(component.hide).toBeTrue();
  });

  it('hide property should be false on togglePasswordFieldType call', () => {
    component.togglePasswordFieldType();
    expect(component.hide).toBeFalse();
  });

  it('should call authservice signUp method when signUpUser function invoked', () => {
    // arrange
    service = fixture.debugElement.injector.get(AuthService);
    component.signupForm.get('name')?.setValue('Jane Doe');
    component.signupForm.get('email')?.setValue('janedoe@mailinator.com');
    component.signupForm.get('password')?.setValue('12345678');

    // act
    const registerSpy = spyOn(service, 'signUp').and.callFake(() => {
      return of({
        success: true,
        resource: 'auth/register',
        data: new User('Jane Doe', 'janedoe@mailinator.com', '12345678'),
        error: null,
        message: 'Registration successful',
      });
    });
    component.signUpUser();

    // assert
    expect(registerSpy).toHaveBeenCalledTimes(1);
  });

  it('should return on signUpUser call when form is invalid', () => {
    component.signUpUser();
    expect(component.signupForm.invalid).toBeTrue();
  });
});
