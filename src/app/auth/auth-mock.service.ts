import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User, Login } from './models';
import { ServerResponse } from '../shared/classes/server-response.class';

@Injectable({
  providedIn: 'root',
})
export class AuthMockService {
  signUp(user: User): Observable<ServerResponse<User>> {
    return of<ServerResponse<User>>({
      success: true,
      message: 'Registration successful',
      error: null,
      data: user,
      resource: 'auth/register'
    });
  }

  login(data: Login): Observable<ServerResponse<User>> {
    return of<ServerResponse<User>>({
      success: true,
      message: 'Registration successful',
      error: null,
      data: new User('John Doe', 'johndoe@mailinator.com', '12345678'),
      resource: 'auth/login',
    });
  }

  logout() {
    return of<ServerResponse<void>>({
      success: true,
      message: 'Registration successful',
      error: null,
      data: null,
      resource: 'auth/login',
    });
  }
}
