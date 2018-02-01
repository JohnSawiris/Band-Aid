import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthenticationService]
})

export class HeaderComponent implements OnInit {
  private currentUser;
  private isLoggedIn;

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (!user) {
        this.currentUser = null;
      } else if (user) {
        this.currentUser = user;
      }
    });
  }

  login() {
    this.authService.login();
  }

}
