import { Location } from '@angular/common';
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
import { TodosComponent } from 'src/app/todo/todos/todos.component';
import { AuthService } from '../auth.service';
import { User } from '../models';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  // let nativeElement: any;
  let debugElement: DebugElement;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, MatSnackBarModule, RouterTestingModule.withRoutes([{ path: 'todos', component: TodosComponent}]), MatFormFieldModule, MatInputModule, BrowserAnimationsModule, MatIconModule],
      declarations: [SigninComponent],
      providers: [AuthService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    // nativeElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid form when empty', () => {
    expect(component.signinForm.valid).toBeFalsy();
  })
  
  it('should be invalid email field when empty', () => {
    expect(component.signinForm.get('email')?.valid).toBeFalsy();
    const errors = component.signinForm.get('email')?.errors || {};
    expect(errors.required).toBeTrue();
  })
  
  it('should be invalid password field when empty', () => {
    expect(component.signinForm.get('password')?.valid).toBeFalsy();
    const errors = component.signinForm.get('password')?.errors || {};
    expect(errors.required).toBeTrue();
  })

  it('should login button be disabled when empty', () => {
    const loginBtn = debugElement.query(By.css('button[type="submit"]'));
    expect(loginBtn.nativeElement.textContent).toContain('Login');
    expect(loginBtn.attributes['disabled']).toBeDefined();
  })

  it('email field should be valid with value "janedoe@mailinator.com"', () => {
    component.signinForm.get('email')?.setValue('janedoe@mailinator.com');
    expect(component.signinForm.get('email')?.valid).toBeTruthy();
  })

  it('password field should be valid with value "12345678"', () => {
    component.signinForm.get('password')?.setValue('12345678');
    expect(component.signinForm.get('password')?.valid).toBeTruthy();
  })

  it('form should be valid with value email "janedoe@mailinator.com" and password "12345678"', () => {
    component.signinForm.get('email')?.setValue('janedoe@mailinator.com');
    component.signinForm.get('password')?.setValue('12345678');
    expect(component.signinForm.valid).toBeTruthy();
  });

  it('hide property should be true', () => {
    expect(component.hide).toBeTrue();
  })
  
  it('hide property should be false on togglePasswordFieldType call', () => {
    component.togglePasswordFieldType();
    expect(component.hide).toBeFalse();
  });

  it('should call authservice login method when signInUser function invoked', fakeAsync(() => {
    // arrange
    service = fixture.debugElement.injector.get(AuthService);
    component.signinForm.get('email')?.setValue('janedoe@mailinator.com');
    component.signinForm.get('password')?.setValue('12345678');
    const location: Location = TestBed.inject(Location);

    // act
    const loginSpy = spyOn(service, 'login').and.callFake(() => {
      return of({
        success: true,
        resource: 'auth/login',
        data: new User('Jane Doe', 'janedoe@mailinator.com', '12345678'),
        error: null,
        message: 'Login successful',
      });
    });
    component.signInUser();

    // assert
    expect(loginSpy).toHaveBeenCalledTimes(1);
    tick(3100);
    expect(location.path()).toEqual('/todos');
  }));

  it('should return on signInUser call when form is invalid', () => {
    component.signInUser();
    expect(component.signinForm.invalid).toBeTrue();
  })
});
