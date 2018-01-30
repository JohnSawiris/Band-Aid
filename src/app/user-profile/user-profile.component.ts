import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user.model';
import { UserProfileService } from '../user-profile.service'
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [ UserProfileService ]
})

export class UserProfileComponent implements OnInit {

  profiles: any[] = [];

  constructor(private router: Router, private userService: UserProfileService, ) { }

  ngOnInit() {
    this.userService.getProfiles().subscribe(profilesLastEmitted => {
      this.profiles = profilesLastEmitted;
    });
  }
}
