import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserProfile } from './user.model';
import { UserProfileListService } from './user-profile-list.service';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    public userProfileListService: UserProfileListService
  ) {
    this.user = afAuth.authState;
  }

  createWithEmail(email: string, password: string, name: string) {
    this.afAuth
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      const newUser = new UserProfile(name, value.uid, value.email);
      this.userProfileListService.addNewProfile(newUser);
    })
    .catch((err: firebase.FirebaseError) => {
      alert(err.message);
    })
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isLoggedIn() {
    return (this.user ? true : false);
  }

}
