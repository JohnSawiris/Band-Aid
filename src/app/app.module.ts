import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { masterFirebaseConfig } from '../api-keys';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { UserProfileComponent } from './user-profile/user-profile.component';

import { SearchComponent } from './search/search.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { HeaderComponent } from './header/header.component';

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
    UserProfileComponent,
    SearchComponent,
    ResultsListComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
