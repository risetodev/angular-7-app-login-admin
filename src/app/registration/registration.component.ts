import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User;

  bufPass: string;

  success: boolean;
  error: boolean;


  submitRegistration() {
    this.user.role = null;
    this.authentication.regUser(this.user).subscribe(response => {
      if (response['status'] === 'success') {
        this.error = false;
        this.success = true;
        setTimeout(() => this.router.navigateByUrl(''), 2000);
      } else {
        this.success = false;
        this.error = true;
      }
    });
  }

  isInValid() {
    const { email, password } = this.user;
    const { bufPass } = this;
    if (email !== undefined && password !== undefined && bufPass !== undefined && (password === bufPass)) {
      return false;
    } else { return true; }
  }

  constructor(private authentication: AuthenticationService, private router: Router) {
    this.user = new User();
    this.success = false;
    this.error = false;
  }

  ngOnInit() {
  }

}
