import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';

import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component'


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profiles',
    component: UserProfileListComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'artist-list/:name',
    component: ArtistListComponent
  },
  {
    path: 'artist-album-list/:id',
    component: ArtistAlbumListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
