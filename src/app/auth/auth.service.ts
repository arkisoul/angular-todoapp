import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User, Login } from './models';
import { ServerResponse } from '../shared/classes/server-response.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
  ) { }

  signUp(user: User): Observable<ServerResponse<User>> {
    return this.http.post<ServerResponse<User>>(`${this.API_URL}/register`, user);
  }

  login(data: Login): Observable<ServerResponse<void>> {
    return this.http.post<ServerResponse<void>>(`${this.API_URL}/login`, data);
  }

  logout() {
    return this.http.delete<ServerResponse<void>>(`${this.API_URL}/logout`);
  }
}
