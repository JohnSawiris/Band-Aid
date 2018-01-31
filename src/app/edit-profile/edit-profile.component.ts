import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() selectedProfile;
  @Output() doneSender = new EventEmitter();

  constructor(private profileService: UserProfileListService, private router: Router) { }

  updateSubmit(profile){
    this.profileService.updateProfile(profile);
    this.doneSender.emit();
  }

  ngOnInit() {
  }

}
