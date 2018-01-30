import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { masterFirebaseConfig } from '../api-keys';
import { AppComponent } from './app.component';
import { TourComponent } from './tour/tour.component';
import { routing } from './app.routing';


import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';

import { SearchComponent } from './search/search.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { TourResultsComponent } from './tour-results/tour-results.component';

import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  projectId: masterFirebaseConfig.projectId,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    UserProfileListComponent,
    SearchComponent,
    ResultsListComponent,
    TourResultsComponent,
    HeaderComponent,
    WelcomeComponent,
    SignUpComponent,
    UserProfileComponent,
    ArtistListComponent,
    ArtistAlbumListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
