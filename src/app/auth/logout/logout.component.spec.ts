import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../auth.service';

import { LogoutComponent } from './logout.component';
import { of } from 'rxjs';
import { SigninComponent } from '../signin/signin.component';
import { Location } from '@angular/common';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      imports: [RouterTestingModule.withRoutes([{path: 'auth/signin', component: SigninComponent}]), HttpClientTestingModule],
      providers: [AuthService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call logout api', fakeAsync (() => {
    service = fixture.debugElement.injector.get(AuthService);
    const location: Location = TestBed.inject(Location);
    const logoutSpy = spyOn(service, 'logout').and.callFake(() => {
      return of({success: true, resource: 'auth/logout', data: null, error: null, message: 'Logout successful'})
    });
    component.ngOnInit();
    tick(100);
    expect(logoutSpy).toHaveBeenCalledTimes(1);
    tick(100);
    expect(location.path()).toEqual('/auth/signin');
  }))
});
