import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';

const MaterialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // AuthRoutingModule,
    SharedModule,
    RouterModule,
    ...MaterialModules,
  ],
  exports: [SignupComponent, SigninComponent]
})
export class AuthModule {}
