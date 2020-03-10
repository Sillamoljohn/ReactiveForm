import { SignUPComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'signup', component: SignUPComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    redirectTo: '',
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
