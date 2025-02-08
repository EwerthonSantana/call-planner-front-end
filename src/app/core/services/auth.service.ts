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
    return localStorage.getItem('token');
  }

  setToken() {
    localStorage.setItem('token', this.generateToken(24));
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  generateToken(length: number = 32): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return token;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.api}/users?email=${email}&password=${password}`);
  }
}
