import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { UserProfile } from '../user.model';
import { UserProfileListService } from '../user-profile-list.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [AuthenticationService, UserProfileListService]
})

export class SignUpComponent implements OnInit {
  displayError;
  constructor(
    public authService: AuthenticationService,
    private router: Router,
    public userProfileService: UserProfileListService
  ) { }

  ngOnInit() {
  }

  signup(email: string, password: string, name: string) {
    this.authService.createWithEmail(email, password, name);
    this.router.navigate(['']);
  }
}
