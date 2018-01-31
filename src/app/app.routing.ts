import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component'
import { ArtistListComponent } from './artist-list/artist-list.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'artist-album-list/:id',
    component: ArtistAlbumListComponent
  },
  {
    path: 'artist-list/:name',
    component: ArtistListComponent
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
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
