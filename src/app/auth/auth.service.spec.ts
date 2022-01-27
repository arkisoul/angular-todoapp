import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AuthMockService } from './auth-mock.service';
import { User } from './models';

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
    service.signUp(new User('Jane Doe', 'janedoe@mailinator.com', '12345678')).subscribe(t => {
      expect(t.success).toBeTrue();
      expect(t.data instanceof User).toBeTrue();
      expect(t.data?.name).toEqual('Jane Doe');
      expect(t.data?.email).toEqual('janedoe@mailinator.com');
      expect(t.data?.password).toEqual('12345678');
    })
  })
});
