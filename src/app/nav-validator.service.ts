import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavValidatorService {

  routeTo(url) {
    if (sessionStorage != null) {
      this.route.navigateByUrl(url);
    }
  }

  constructor(private route: Router) { }
}
