import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { UserProfileListService } from '../user-profile-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthenticationService]
})

export class HeaderComponent implements OnInit {
  private currentUser;
  private userFirebaseProfile;
  private isLoggedIn;

  constructor(
    public authService: AuthenticationService,
    public userProfileListService: UserProfileListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (!user) {
        this.currentUser = null;
      } else if (user) {
        this.currentUser = user;
      }

      this.userProfileListService.getProfiles().subscribe(profilesReturned => {
        this.userFirebaseProfile = profilesReturned.find((profile) => {
          return profile.id === user.uid;
        });
      });
    });
  }

  logout() {
    this.userFirebaseProfile = null;
  }
}
