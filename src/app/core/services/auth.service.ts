import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api: string = environment.api;
  private user!: any;

  constructor(private http: HttpClient) {}

  get User() {
    return this.user;
  }

  setUser(user: any) {
    this.user = user;
  }

  getToken(): string | null {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }

  setToken(token: string, keepLogged?: boolean) {
    keepLogged ? localStorage.setItem('token', token) : sessionStorage.setItem('token', token);
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  login(payload: any): Observable<any> {
    return this.http.post(`${this.api}/auth/login`, payload);
  }
}
