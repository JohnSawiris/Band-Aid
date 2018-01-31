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
  user;
  private isLoggedIn: boolean;
  private userName: string;

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {
    this.authService.user.subscribe(user => {
      if(user === null) {
        this.isLoggedIn = false;
        this.router.navigate(['']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.router.navigate(['user-profile']);
      }
    });
  }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
