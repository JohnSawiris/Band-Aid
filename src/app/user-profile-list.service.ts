import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import { masterFirebaseConfig } from '../api-keys';
import { UserProfile } from './user.model';

@Injectable()
export class UserProfileListService {

  profiles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.profiles = database.list('userProfiles');
  }

  getProfiles(){
    return this.profiles
  }

  getProfilesById(profileId: string){
    return this.database.object('userProfiles/' + profileId);
  }

  addNewProfile(newUser: UserProfile) {
    this.profiles.push(newUser);
  }

  updateProfile(profile){
    var profileEntry = this.getProfilesById(profile.$key);
    profileEntry.update({name: profile.name});
  }
}
