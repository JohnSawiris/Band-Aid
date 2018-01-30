import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
