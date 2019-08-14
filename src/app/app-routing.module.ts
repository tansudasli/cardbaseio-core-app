import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component';
import { RegisterComponent } from './components/authz/register/register.component';
import { VerificationComponent } from './components/authz/verification/verification.component';
import { MasterComponent } from './components/master.component';
import { VerifyComponent } from './components/authz/verify/verify.component';
import { AuthenticationComponent } from './components/authz/authentication.component';
import { PageNotFoundComponent } from './components/404/page-not-found.component';
import { AuthenticationGuard } from './components/authz/authentication.guard';

const routes: Routes = [
  { path: '', component: MasterComponent,  data: { title: 'Master', animation: 'right' } },
  { path: 'detail/:documentId', component: DetailComponent,  data: { title: 'Detail', animation: 'left' },
    canActivate: [AuthenticationGuard] },
  { path: 'detail', component: DetailComponent,  data: { title: 'Detail', animation: 'detailPage' },
    canActivate: [AuthenticationGuard] },
  { path: 'authz/signin', component: AuthenticationComponent,  data: { title: 'Sign in' } },
  { path: 'authz/verify', component: VerifyComponent,  data: { title: 'Verify', animation: 'left' } },
  { path: 'authz/verification', component: VerificationComponent,  data: { title: 'Verification', animation: 'left' } },
  { path: 'authz/register', component: RegisterComponent,  data: { title: 'Register', animation: 'left' } },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
