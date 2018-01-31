import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileListService } from '../user-profile-list.service';
import { UserProfile } from '../user.model';
import * as firebase from "firebase";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [UserProfileListService]
})

export class EditProfileComponent implements OnInit {
  private user;

  @Input() selectedProfile;
  @Output() doneSender = new EventEmitter();

  constructor(private profileService: UserProfileListService, private router: Router) {}

  updateSubmit(profile){
    this.profileService.updateProfile(profile);
    this.doneSender.emit();
  }

  ngOnInit() {
  }

  ngDoCheck() {
   this.user = firebase.auth().currentUser;
  }
}
