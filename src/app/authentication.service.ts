import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  // currentUser = firebase.auth().currentUser;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  // used farbase create user with email method
  // set the error parameter to FirebaseError datatype
  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error: firebase.FirebaseError){
      let errorCode: any = error.code;
      let errorMessage: any = error.message;
      if(errorCode === 'auth/weak-password') {
        console.log('Password is weak')
      } else {
        console.log(errorMessage);
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
