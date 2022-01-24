import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TodosComponent } from './todo/todos/todos.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
