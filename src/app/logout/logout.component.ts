import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  providers: [AuthenticationService]
})
export class LogoutComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
