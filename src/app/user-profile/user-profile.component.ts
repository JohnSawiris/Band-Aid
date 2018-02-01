import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as firebase from "firebase";

import { UserProfile } from '../user.model';
import { UserProfileListService } from '../user-profile-list.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [UserProfileListService]
})

export class UserProfileComponent implements OnInit {
  profileId: string;
  profileToDisplay;
  private user;
  toggle: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userProfileService: UserProfileListService

  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.profileId = urlParameters['id'];
    });
    this.userProfileService.getProfiles().subscribe(profiles => {
      for(let profile of profiles) {
        if(profile.id === this.profileId) {
          this.profileToDisplay = profile;
        }
      }
    });
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    if(this.user.uid === this.profileId) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }

  updateSubmit(profile){
    this.userProfileService.updateProfile(profile);
  }
}
