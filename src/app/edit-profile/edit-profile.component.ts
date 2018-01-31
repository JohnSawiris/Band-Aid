import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileListService } from '../user-profile-list.service';
import { UserProfile } from '../user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [UserProfileListService]
})

export class EditProfileComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
