import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {
    this.authService.user.subscribe(user => {
      if(user) {
        this.router.navigate(['user-profile/', user.uid]);
      }
    });
  }

  ngOnInit() {
    this.authService.login();
  }

}
