import { Component, Input } from '@angular/core';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  showNav() {
    if (sessionStorage.getItem('user') == null) {
      return false;
    } else { return true; }
  }


  constructor(private router: Router) {

  }
}
