import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AuthMockService } from './auth-mock.service';
import { User } from './models';
import { ServerResponse } from '../shared/classes/server-response.class';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AuthService, useClass: AuthMockService }],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a new user', () => {
    service
      .signUp(new User('Jane Doe', 'janedoe@mailinator.com', '12345678'))
      .subscribe((t) => {
        expect(t.success).toBeTrue();
        expect(t.data instanceof User).toBeTrue();
        expect(t.data?.name).toEqual('Jane Doe');
        expect(t.data?.email).toEqual('janedoe@mailinator.com');
        expect(t.data?.password).toEqual('12345678');
      });
  });

  it('should login an existing user', () => {
    service
      .login({ email: 'janedoe@mailinator.com', password: '12345678' })
      .subscribe((t) => {
        expect(t.success).toBeTrue();
        expect(t.data instanceof User).toBeTrue();
        expect(t.data?.email).toEqual('janedoe@mailinator.com');
        expect(t.data?.password).toEqual('12345678');
      });
  });

  it('should logout a signin user', () => {
    service.logout().subscribe((t) => {
      expect(t.success).toBeTrue();
    });
  });
});

describe('AuthService with [HttpTestingController]', () => {
  let httpMock: HttpTestingController;
  let authService: AuthService;
  let user: User;
  let baseUrl = 'http://localhost:3000'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    httpMock = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(AuthService);
    user = new User('Jane Doe', 'janedoe@mailinator.com', '12345678');
  });

  it('should register a new user', () => {
    let result: ServerResponse<User>;
    authService.signUp(user).subscribe((t) => {
      result = t;
    });

    const mockReq = httpMock.expectOne({
      method: 'POST',
      url: baseUrl + '/auth/register',
    });

    // mockReq.flush(result);

    // expect(result.data).toEqual(user);
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    httpMock.verify();
  });
  
  it('should login the user', () => {
    let result: ServerResponse<User>;
    authService
      .login({ email: 'janedoe@mailinator.com', password: '12345678' })
      .subscribe((t) => {
        result = t;
      });

    const mockReq = httpMock.expectOne({
      method: 'POST',
      url: baseUrl + '/auth/login',
    });

    // mockReq.flush(result);

    // expect(result.data).toEqual(user);
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    httpMock.verify();
  });
});
