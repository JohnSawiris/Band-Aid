import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { masterDiscogsAuth, masterFirebaseConfig } from '../api-keys'
import { AppComponent } from './app.component';

export const discogsAuth = {
  key: masterDiscogsAuth.key,
  secret: masterDiscogsAuth.secret
}

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  projectId: masterFirebaseConfig.projectId,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent
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
