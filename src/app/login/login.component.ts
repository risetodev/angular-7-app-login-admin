import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User;
  error: boolean;
  confirmation: boolean;
  denyMessage: boolean;

  login() {

    this.authentication.login(this.user).subscribe(response => {
      if (response['role'] == null) {
        this.error = false;
        this.confirmation = true;
        setTimeout(() => this.confirmation = false, 2000);
      }
      if (response['status'] === 'Invalid user') {
        this.confirmation = false;
        this.error = true;
        setTimeout(() => this.error = false, 2000);
      }
      if (response['role'] === 'Admin') {
        this.router.navigateByUrl('/admin');
        sessionStorage.setItem('user', JSON.stringify({ email: response['email'], role: response['role'] }));
      }
      if (response['role'] === 'User') {
        this.router.navigateByUrl('/content');
        sessionStorage.setItem('user', JSON.stringify({ email: response['email'], role: response['role'] }));
      }
      if (response['role'] === 'Denied') {
        this.error = false;
        this.confirmation = false;
        this.denyMessage = true;
        setTimeout(() => this.denyMessage = false, 2000);
      }
    });
  }

  constructor(private authentication: AuthenticationService, private router: Router) {
    this.error = false;
    this.confirmation = false;
    this.user = new User();









  }

  ngOnInit() {

  }




}
