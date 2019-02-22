import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavValidatorService } from '../nav-validator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logOut() {
    sessionStorage.removeItem('user');
  }


  email: String;
  role: String;

  router: any;


  constructor(private route: NavValidatorService) {   
    if (sessionStorage.getItem('user')  != null) {
      this.email = JSON.parse(sessionStorage.getItem('user')).email;
      this.role = JSON.parse(sessionStorage.getItem('user')).role;
    } else {
      this.email = "";
      this.role = "";
    }

  }


  ngOnInit() {

  }

}
