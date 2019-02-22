import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  rootURL: string;

  constructor(private http: HttpClient) {

    this.rootURL = 'http://localhost:3000/';
  }

  regUser(user) { return this.http.post(this.rootURL + 'register', user); }

  login(user) { return this.http.post(this.rootURL + 'login', user); }

  getUsers() { return this.http.get(this.rootURL + 'users'); }

  updateUser(user) { return this.http.post(this.rootURL + 'updateUser', { email: user.email, role: user.role }); }

  deleteUser(user) { return this.http.post(this.rootURL + 'deleteUser', { email: user.email }); }

}
