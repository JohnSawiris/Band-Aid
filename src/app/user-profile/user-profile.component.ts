import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserProfileListService } from '../user-profile-list.service';
import { UserProfile } from '../user.model';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [UserProfileListService]
})

export class UserProfileComponent implements OnInit {
  profileId: string;
  profileToDisplay;

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
}
