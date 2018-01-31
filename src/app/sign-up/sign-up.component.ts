import { Component, OnInit } from '@angular/core';
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
    public userProfileService: UserProfileListService
  ) { }

  ngOnInit() {
  }

  signup(email: string, password: string, name: string) {
    this.authService.createWithEmail(email, password, name);
  }
}
