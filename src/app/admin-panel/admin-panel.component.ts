import { Component, OnInit } from '@angular/core';

import { User } from '../user.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {


  users: Array<User>;
  user: User;

  selected: boolean;

  constructor(private updateService: AuthenticationService, private router: Router) {
    this.user = new User;
    if (sessionStorage.getItem('user') == null) {
      router.navigateByUrl('');
    }
    if (JSON.parse(sessionStorage.getItem('user')).role === 'User') { router.navigateByUrl('/content'); }

  }

  selectedUser(user, selected) {
    this.selected = selected;
    this.user.email = user.email;
    this.user.role = user.role;
  }

  isInValid() {
    if (this.user.email !== undefined) {
      return false;
    } else { return true; }
  }


  ngOnInit() {
    this.updateService.getUsers().subscribe(res => {
      this.users = [];
      if (res['status'] === 'success') {
        res['users'].forEach(user => {
          this.users.push(user);
        });
      }
    });
  }

  submitUpdate(user) {
    this.updateService.updateUser(user).subscribe(res => {

      if (res['status'] === 'success') { this.ngOnInit(); alert('Successful updated'); }
    });
  }



  deleteUser(user) {
    this.updateService.deleteUser(user).subscribe(res => {
      if (res['status'] === 'success') { this.ngOnInit(); }
    });
  }

}
