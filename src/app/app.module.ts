import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { masterFirebaseConfig } from '../api-keys';
import { routing } from './app.routing';
import { UserProfileListService } from './user-profile-list.service';

import { AppComponent } from './app.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { SearchComponent } from './search/search.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TourComponent } from './tour/tour.component';
import { TourResultsComponent } from './tour-results/tour-results.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';
import { WelcomeComponent } from './welcome/welcome.component';


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
    AlbumDetailsComponent,
    ArtistAlbumListComponent,
    ArtistListComponent,
    HeaderComponent,
    LoginComponent,
    ResultsListComponent,
    SearchComponent,
    SignUpComponent,
    TourComponent,
    TourResultsComponent,
    UserProfileComponent,
    UserProfileListComponent,
    WelcomeComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserProfileListService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
