import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: `signup`,
        pathMatch: 'full'
      },
      {
        path: `signup`,
        component: SignupComponent,
      },
      {
        path: `signin`,
        component: SigninComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
