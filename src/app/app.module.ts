import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { masterFirebaseConfig } from '../api-keys'
import { AppComponent } from './app.component';
import { TourComponent } from './tour/tour.component';

import { UserProfileComponent } from './user-profile/user-profile.component';

import { SearchComponent } from './search/search.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { TourResultsComponent } from './tour-results/tour-results.component';

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
    UserProfileComponent,
    SearchComponent,
    ResultsListComponent,
    TourResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
