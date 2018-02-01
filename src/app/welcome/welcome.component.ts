import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  private user;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

}
