import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user.model';
import { UserProfileListService } from '../user-profile-list.service'
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile-list.component.html',
  styleUrls: ['./user-profile-list.component.scss'],
  providers: [ UserProfileListService ]
})

export class UserProfileListComponent implements OnInit {

  profiles: any[] = [];

  constructor(private router: Router, private userService: UserProfileListService ) { }

  ngOnInit() {
    this.userService.getProfiles().subscribe(profilesLastEmitted => {
      this.profiles = profilesLastEmitted;
    });
  }
}
